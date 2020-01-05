import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppFrame } from "../../components";
import { Header, Workflow } from "../index";

const App = () => {
  return (
    <AppFrame>
      <Header />
      <Router>
        <Route path="/" component={Workflow} />
      </Router>
    </AppFrame>
  );
};

export default App;
