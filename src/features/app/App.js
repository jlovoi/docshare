import React from "react";
import { Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppFrame } from "../../components";
import { Header, Home, SideBar, Upload, Workflow } from "../index";
import withAuth from "../../auth";

const useStyles = makeStyles(theme => ({
  appFlex: {
    display: "flex",
    flexDirection: "row"
  },
  sideBar: {
    flex: 1
  },
  appContent: {
    position: "relative",
    top: "80px",
    paddingTop: "24px",
    paddingBottom: "24px",
    flex: 4
  }
}));

const App = ({ history, handleLogout }) => {
  const classes = useStyles();

  return (
    <AppFrame>
      <Router history={history}>
        <Header handleLogout={handleLogout} />
        <div className={classes.appFlex}>
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <div className={classes.appContent}>
            <Route path="/docs" component={Workflow} />
            <Route path="/upload" component={Upload} />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    </AppFrame>
  );
};

export default withAuth(App);
