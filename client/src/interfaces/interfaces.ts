export interface IParams {
  page?: string;
  slug?: string;
}
export interface IToDo {
  _id: string;
  name: string;
  description: string;
  state: boolean;
  createdAt: string;
  updatedAt: string;
}
