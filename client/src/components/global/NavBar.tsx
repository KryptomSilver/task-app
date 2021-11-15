import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand mb-0 h1">
          Task APP
        </Link>
        <Link to="/create_task" className="btn btn-success btn-lg">
          <i className="bi bi-plus-square me-2" style={{ fontSize: 20 }}></i>Add
          Task
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
