import { ITask } from "../../interfaces/interfaces";
import { deleteAPI, getAPI, patchAPI, postAPI } from "../../utils/FetchData";
import { Dispatch } from "redux";
import {
  CHANGE_STATE_TASK,
  CREATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  ITaskType,
} from "../types/taskTypes";
import { ALERT, IAlertType } from "../types/alertType";
import { validateTask } from "../../utils/Valid";

export const createTask =
  (task: ITask) => async (dispatch: Dispatch<ITaskType | IAlertType>) => {
    const check = validateTask(task);
    if (check.errLenght > 0) {
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } });
    }
    dispatch({ type: ALERT, payload: {} });
    try {
      const res: any = await postAPI("task", task);
      dispatch({ type: CREATE_TASK, payload: res.data });
      return true;
    } catch (error: any) {
      console.log(error);
    }
  };
export const getTasks =
  () => async (dispatch: Dispatch<ITaskType | IAlertType>) => {
    dispatch({ type: ALERT, payload: {} });

    try {
      const res: any = await getAPI("task");
      dispatch({ type: GET_TASKS, payload: res.data });
    } catch (error: any) {
      console.log(error);
    }
  };
export const deleteTask =
  (id: string) => async (dispatch: Dispatch<ITaskType | IAlertType>) => {
    dispatch({ type: ALERT, payload: {} });

    try {
      await deleteAPI(`task/${id}`);
      dispatch({ type: DELETE_TASK, payload: id });
    } catch (error: any) {
      console.log(error);
    }
  };
export const changeStatusTask =
  (id: string, state: boolean) =>
  async (dispatch: Dispatch<ITaskType | IAlertType>) => {
    dispatch({ type: ALERT, payload: {} });
    try {
      const res: any = await patchAPI(`task/state/${id}`, { state });
      dispatch({ type: CHANGE_STATE_TASK, payload: res.data });
    } catch (error: any) {
      console.log(error);
    }
  };
