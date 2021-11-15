import { ITask } from "../interfaces/interfaces";
export const validateTask = ({ name, description }: ITask) => {
  const errors: string[] = [];
  if (!name.trim()) {
    errors.push("Please add your name.");
  }
  if (!description.trim()) {
    errors.push("Please add your description.");
  }
  return {
    errMsg: errors,
    errLenght: errors.length,
  };
};
