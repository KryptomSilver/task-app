import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand mb-0 h1">
          TODO APP
        </Link>
        <Link to="/create_todo" className="btn btn-success">
          Add TODO
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
