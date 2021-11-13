import { IToDo } from "../../interfaces/interfaces";
import {
  CREATE_TODO,
  DELETE_TODO,
  GET_TODOS,
  IToDoType,
  UPDATE_TODO,
} from "../types/todoTypes";

const todoReducer = (state: IToDo[] = [], action: IToDoType): IToDo[] => {
  switch (action.type) {
    case CREATE_TODO:
      return [action.payload, ...state];
    case UPDATE_TODO:
      return state.map((todo: IToDo) =>
        todo._id === action.payload._id
          ? { ...todo, name: action.payload.name }
          : todo
      );
    case GET_TODOS:
      return action.payload;
    case DELETE_TODO:
      return state.filter((TODO: IToDo) => TODO._id !== action.payload);
    default:
      return state;
  }
};
export default todoReducer;
