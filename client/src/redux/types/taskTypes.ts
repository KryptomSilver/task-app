import { ITask } from "../../interfaces/interfaces";

export const CREATE_TASK = "CREATE_TASK";
export const GET_TASKS = "GET_TASKS";
export const GET_TASK = "GET_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CHANGE_STATE_TASK = "CHANGE_STATE_TASK";

export interface ICreateTask {
  type: typeof CREATE_TASK;
  payload: ITask;
}
export interface IGetTasks {
  type: typeof GET_TASKS;
  payload: ITask[];
}
export interface IGetTask {
  type: typeof GET_TASK;
  payload: ITask;
}
export interface IUpdateTask {
  type: typeof UPDATE_TASK;
  payload: ITask;
}
export interface IDeleteTask {
  type: typeof DELETE_TASK;
  payload: string;
}
export interface IChangeStatusTask {
  type: typeof CHANGE_STATE_TASK;
  payload: ITask;
}
export type ITaskType =
  | ICreateTask
  | IGetTasks
  | IGetTask
  | IUpdateTask
  | IDeleteTask
  | IChangeStatusTask;
