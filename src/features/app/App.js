import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppFrame } from "../../components";
import { Header, Upload, Workflow } from "../index";

const App = () => {
  return (
    <AppFrame>
      <Header />
      <Router>
        <Route path="/doc" component={Workflow} />
        <Route path="/upload" component={Upload} />
      </Router>
    </AppFrame>
  );
};

export default App;
