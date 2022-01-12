import {ActionAuthType} from "./actionType";
import {auth} from "../../firebase";
export const signUpAction = (fullName, email, password) => async (dispatch) => {
	try {
		dispatch({type: ActionAuthType.USER_REGISTER_REQUEST});
		const {user} = await auth.createUserWithEmailAndPassword(email, password);
		user.updateProfile({
			fullName,
		});
		dispatch({
			type: ActionAuthType.USER_REGISTER_SUCCESS,
			payload: user,
		});
		document.location.href = "/login";
	} catch (error) {
		dispatch({type: ActionAuthType.USER_REGISTER_FAIL, payload: error});
		console.log(error);
	}
};
export const loginAction = (email, password) => async (dispatch) => {
	try {
		dispatch({type: ActionAuthType.USER_LOGIN_REQUEST});
		const {user} = await auth.signInWithEmailAndPassword(email, password);

		dispatch({
			type: ActionAuthType.USER_LOGIN_SUCCESS,
			payload: user,
		});
	} catch (error) {
		dispatch({type: ActionAuthType.USER_LOGIN_FAIL, payload: error});
		console.log(error);
	}
};
export const logOutAction = () => async (dispatch) => {
	try {
		dispatch({type: ActionAuthType.USER_LOGOUT_REQUEST});
		await auth.signOut();

		dispatch({
			type: ActionAuthType.USER_LOGOUT_SUCCESS,
		});
		document.location.href = "/login";
	} catch (error) {
		dispatch({type: ActionAuthType.USER_LOGOUT_FAIL, payload: error});
		console.log(error);
	}
};
