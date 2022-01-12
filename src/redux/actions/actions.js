import axios from "axios";
import {ActionType} from "./actionType";
import {db} from "../../firebase";

export const getUsers = (users) => ({
	type: ActionType.GET_USERS,
	payload: users,
});

// export const loadUsers = () => async (dispatch, getState) => {
// 	try {
// 		const response = await axios.get(`${process.env.REACT_APP_API}`);
// 		console.log("response: ", response);
// 		dispatch(getUsers(response.data));
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const loadUsers = () => async (dispatch, getState) => {
	db.collection("users").onSnapshot((snapshot) => {
		try {
			const users = [];
			snapshot.forEach((doc) => {
				users.push({...doc.data(), id: doc.id});
			});
			dispatch(getUsers(users));
		} catch (error) {
			console.log(error);
		}
	});
};

export const userDeleted = () => ({
	type: ActionType.DELETE_USER,
});

export const deleteUser = (id) => async (dispatch, getState) => {
	try {
		db.collection("users").doc(id).delete();
		dispatch(userDeleted());
		dispatch(loadUsers());
	} catch (error) {
		console.log(error);
	}
};
// export const deleteUser = (id) => async (dispatch, getState) => {
// 	try {
// 		const response = await axios.delete(`${process.env.REACT_APP_API}/${id}`);
// 		console.log("response: ", response);
// 		dispatch(userDeleted());
// 		dispatch(loadUsers());
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const userAdded = () => ({
	type: ActionType.ADD_USER,
});

export const addUser = (user) => async (dispatch, getState) => {
	try {
		db.collection("users").doc().set(user);
		dispatch(userAdded());
	} catch (error) {
		console.log(error);
	}
};
// export const addUser = (user) => async (dispatch, getState) => {
// 	try {
// 		const response = await axios.post(`${process.env.REACT_APP_API}`, user);
// 		console.log("response: ", response);
// 		dispatch(userAdded());
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const getSingleData = (user) => ({
	type: ActionType.GET_SINGLE_USER,
	payload: user,
});

export const getSingleUser = (id) => (dispatch, getState) => {
	try {
		db.collection("users")
			.doc(id)
			.get()
			.then((user) => {
				dispatch(getSingleData({...user.data()}));
			});
	} catch (error) {
		console.log(error);
	}
};
// export const getSingleUser = (id) => async (dispatch, getState) => {
// 	try {
// 		const response = await axios.get(`${process.env.REACT_APP_API}/${id}`);
// 		console.log("response: ", response);
// 		dispatch(userEdited(response.data));
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export const userUpdated = () => ({
	type: ActionType.UPDATE_USER,
});

export const updateUser = (user, id) => async (dispatch, getState) => {
	try {
		db.collection("users").doc(id).update(user);

		dispatch(userUpdated());
	} catch (error) {
		console.log(error);
	}
};
// export const updateUser = (user, id) => async (dispatch, getState) => {
// 	try {
// 		const response = await axios.put(
// 			`${process.env.REACT_APP_API}/${id}`,
// 			user
// 		);
// 		console.log("response: ", response);
// 		dispatch(userUpdated());
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
