import { ChangeEvent, FormEvent } from "react";
import rootReducer from "../redux/reducers/index";

export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
export type FormSubmit = FormEvent<HTMLFormElement>;
export type RootStore = ReturnType<typeof rootReducer>;

export interface IParams {
  page?: string;
  slug?: string;
}
export interface ITask {
  id: string;
  name: string;
  description: string;
  state: boolean;
}
export interface IAlert {
  success?: string | string[];
  errors?: string | string[];
}
export interface IProps {
  title: string;
  body: string | string[];
  bgColor: string;
}
