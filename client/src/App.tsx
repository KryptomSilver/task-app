import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageRender from "./PageRender";
import NavBar from "./components/global/NavBar";
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Alert } from "./alert/Alert";
import { useDispatch } from "react-redux";
import { getTasks } from "./redux/actions/taskActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <Router>
      <NavBar />
      <Alert />
      <div className="container">
        <Switch>
          <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
