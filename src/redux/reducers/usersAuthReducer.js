import {ActionAuthType} from "../actions/actionType";

const initialState = {
	loading: false,
	currentUser: null,
	error: null,
};

export const usersAuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionAuthType.USER_REGISTER_REQUEST:
		case ActionAuthType.USER_LOGIN_REQUEST:
		case ActionAuthType.USER_LOGOUT_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ActionAuthType.USER_LOGOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
			};
		case ActionAuthType.USER_REGISTER_SUCCESS:
		case ActionAuthType.USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				currentUser: action.payload,
			};
		case ActionAuthType.USER_REGISTER_FAIL:
		case ActionAuthType.USER_LOGIN_FAIL:
		case ActionAuthType.USER_LOGOUT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
