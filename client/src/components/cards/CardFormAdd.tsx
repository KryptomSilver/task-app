import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { FormSubmit, InputChange, ITask } from "../../interfaces/interfaces";
import { createTask } from "../../redux/actions/taskActions";

const CardFormAdd = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialState = {
    description: "",
    name: "",
    state: false,
    id: "",
  };
  const [task, setTask] = useState<ITask>(initialState);
  const { description, name } = task;
  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handlSubmit = async (e: FormSubmit) => {
    e.preventDefault();
    const result = await dispatch(createTask(task));
    if (typeof result === "boolean") {
      history.push("/");
    }
  };
  return (
    <form
      onSubmit={handlSubmit}
      className="card bg-secondary mt-3"
      style={{ width: "42rem" }}
    >
      <div className="card-header d-flex justify-content-center align-items-center">
        <h3>Add TASK</h3>
      </div>
      <div className="card-body" style={{ padding: "2rem 3.5rem" }}>
        <div className="form-group">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={handleChangeInput}
              value={name}
              placeholder="Add new note"
            />
            <label htmlFor="name">Name:</label>
          </div>
        </div>
        <div className="form-group my-3">
          <div className="form-floating">
          
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={handleChangeInput}
              placeholder="Add new note"
              cols={30}
              rows={10}
            ></textarea>
            <label htmlFor="name">Description:</label>
          </div>
        </div>
        <div className="form-group my-3">
          <button className="btn btn-lg w-100 btn-primary " type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default CardFormAdd;
