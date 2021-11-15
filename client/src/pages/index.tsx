import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/cards/Card";
import { RootStore } from "../interfaces/interfaces";

const Home = () => {
  const { tasks } = useSelector((state: RootStore) => state);
  return (
    <div className="row mt-4">
      {tasks.map((task) => (
        <Card task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Home;
