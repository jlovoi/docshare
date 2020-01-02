import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppFrame } from "../../components";
import { Header } from "../index";

const App = () => {
  return (
    <AppFrame>
      <Header />
      <Router></Router>
    </AppFrame>
  );
};

export default App;
