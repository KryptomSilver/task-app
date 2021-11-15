import React from "react";
import { useDispatch } from "react-redux";
import { ITask } from "../../interfaces/interfaces";
import { changeStatusTask, deleteTask } from "../../redux/actions/taskActions";

interface IProps {
  task: ITask;
}
const Card: React.FC<IProps> = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };
  const handleChangeStatus = (id: string, state: boolean) => {
    dispatch(changeStatusTask(id, !state));
  };
  return (
    <div className="col-4 mt-4">
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          {task.name}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(task.id)}
          >
            <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
          </button>
        </div>
        <div className="card-body">
          <p className="card-text mb-4">{task.description}</p>
          <div className="d-flex justify-content-center align-items-center">
            {task.state ? (
              <button
                className="btn btn-info"
                style={{ width: "40%" }}
                onClick={() => handleChangeStatus(task.id, task.state)}
              >
                <i className="bi bi-check-all" style={{ fontSize: 20 }}></i>
              </button>
            ) : (
              <button
                className="btn btn-warning"
                style={{ width: "40%" }}
                onClick={() => handleChangeStatus(task.id, task.state)}
              >
                <i className="bi bi-check" style={{ fontSize: 20 }}></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
