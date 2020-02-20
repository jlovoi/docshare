import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { AppFrame } from "../../components";
import { Header, Home, Upload, Workflow } from "../index";

const App = ({ history }) => {
  return (
    <AppFrame>
      <Router history={history}>
        <Header />
        <Route path="/doc" component={Workflow} />
        <Route path="/upload" component={Upload} />
        <Route path="/" component={Home} />
      </Router>
    </AppFrame>
  );
};

export default App;
