import {combineReducers} from "redux";
import {usersAuthReducer} from "./usersAuthReducer";
import {usersReducer} from "./usersReducer";

export const reducers = combineReducers({
	data: usersReducer,
	dataAuth: usersAuthReducer,
});
