import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../interfaces/interfaces";
import Toast from "./Toast";

export const Alert = () => {
  const { alert } = useSelector((state: RootStore) => state);
  return (
    <div>
      {alert.errors && (
        <Toast title="Errors" body={alert.errors} bgColor="bg-danger" />
      )}
      {alert.success && (
        <Toast title="Success" body={alert.success} bgColor="bg-success" />
      )}
    </div>
  );
};
export const showErrMsg = (msg: string) => {
  return <div className="errMsg">{msg}</div>;
};
export const showSuccessMsg = (msg: string) => {
  return <div className="successMsg">{msg}</div>;
};
