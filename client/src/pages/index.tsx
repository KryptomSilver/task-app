import React from "react";
import Card from "../components/cards/Card";

const Home = () => {
  return (
    <div className="row mt-4">
      <div className="col-6 mt-4">
        <Card />
      </div>
      <div className="col-6 mt-4">
        <Card />
      </div>
    </div>
  );
};

export default Home;
