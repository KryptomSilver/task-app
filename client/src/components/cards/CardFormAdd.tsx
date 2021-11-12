import React from "react";

const CardFormAdd = () => {
  return (
    <div
      className="card bg-secondary mt-3 border-primary"
      style={{ width: "42rem" }}
    >
      <div className="card-header d-flex justify-content-center align-items-center">
        <h3>Add TODO</h3>
      </div>
      <div className="card-body" style={{ padding: "2rem 3.5rem" }}>
        <div className="form-group">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Add new note"
            />
            <label htmlFor="name">Name:</label>
          </div>
        </div>
        <div className="form-group my-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Add new note"
            />
            <label htmlFor="name">Description:</label>
          </div>
        </div>
        <div className="form-group my-3">
          <button className="btn btn-md w-100 btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default CardFormAdd;
