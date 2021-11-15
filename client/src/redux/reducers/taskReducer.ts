import { ITask } from "../../interfaces/interfaces";
import {
  CHANGE_STATE_TASK,
  CREATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  ITaskType,
  UPDATE_TASK,
} from "../types/taskTypes";

const taskReducer = (state: ITask[] = [], action: ITaskType): ITask[] => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.payload];
    case UPDATE_TASK:
      return state.map((task: ITask) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task
      );
    case CHANGE_STATE_TASK:
      return state.map((task: ITask) =>
        task.id === action.payload.id
          ? { ...task, state: action.payload.state }
          : task
      );
    case GET_TASKS:
      return action.payload;
    case DELETE_TASK:
      return state.filter((task: ITask) => task.id !== action.payload);
    default:
      return state;
  }
};
export default taskReducer;
