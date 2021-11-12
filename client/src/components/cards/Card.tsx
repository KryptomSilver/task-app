import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between">
        Name TODO
        <button className="btn btn-danger">Delete</button>
      </div>
      <div className="card-body">
        <p className="card-text">description TODO</p>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary text-white"
            style={{ width: "40%" }}
          >
            Finished
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
