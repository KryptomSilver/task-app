import { combineReducers } from "redux";
import tasks from "./taskReducer";
import alert from "./alertReducer";

export default combineReducers({ tasks, alert });
