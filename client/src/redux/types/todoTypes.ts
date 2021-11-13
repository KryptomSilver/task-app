import { IToDo } from "../../interfaces/interfaces";

export const CREATE_TODO = "CREATE_TODO";
export const GET_TODOS = "GET_TODOS";
export const GET_TODO = "GET_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface ICreateTODO {
  type: typeof CREATE_TODO;
  payload: IToDo;
}
export interface IGetTODOS {
  type: typeof GET_TODOS;
  payload: IToDo[];
}
export interface IGetTODO {
  type: typeof GET_TODO;
  payload: IToDo;
}
export interface IUpdateTODO {
  type: typeof UPDATE_TODO;
  payload: IToDo;
}
export interface IDeleteTODO {
  type: typeof DELETE_TODO;
  payload: string;
}
export type IToDoType =
  | ICreateTODO
  | IGetTODOS
  | IGetTODO
  | IUpdateTODO
  | IDeleteTODO;
