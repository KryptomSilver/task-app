import axios from "axios";
const URL_API = `${process.env.REACT_APP_URL_BACKEND}`;
export const postAPI = async (url: string, post: object) => {
  const res = await axios.post(`${URL_API}/${url}`, post);
  return res;
};
export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`${URL_API}/${url}`, {
    headers: { Authorization: `${token}` },
  });
  return res;
};
export const patchAPI = async (url: string, post: object) => {
  const res = await axios.patch(`${URL_API}/${url}`, post);
  return res;
};
export const deleteAPI = async (url: string) => {
  const res = await axios.delete(`${URL_API}/${url}`);
  return res;
};
