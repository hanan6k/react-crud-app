import {ActionType} from "../actions/actionType";

const initialState = {
	users: [],
	user: {},
	loading: true,
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case ActionType.DELETE_USER:
		case ActionType.ADD_USER:
		case ActionType.UPDATE_USER:
			return {
				...state,
				loading: false,
			};
		case ActionType.GET_SINGLE_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};
