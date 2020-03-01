import React from "react";
import { Router, Route } from "react-router-dom";
import { AppFrame } from "../../components";
import { Header, Home, Upload, Workflow } from "../index";

const App = ({ history }) => {
  return (
    <AppFrame>
      <Router history={history}>
        <Header />
        <Route path="/docs" component={Workflow} />
        <Route path="/upload" component={Upload} />
        <Route exact path="/" component={Home} />
      </Router>
    </AppFrame>
  );
};

export default App;
