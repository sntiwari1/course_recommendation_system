// src/reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
    auth: authReducer,
    course: courseReducer,
});
