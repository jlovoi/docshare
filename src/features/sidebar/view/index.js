import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "50px",
    textTransform: "none",
    fontSize: "20px"
  },
  sidebarRoot: {
    backgroundColor: "#ededed",
    height: "90vh",
    position: "fixed",
    width: "20%",
    maxWidth: "250px",
    top: "100px"
  }
}));

const buttons = (history, classes) => [
  <Button
    key="home-nav"
    className={classes.button}
    onClick={() => history.push("/")}
  >
    Your Documents
  </Button>,
  <Button
    key="new-doc-nav"
    className={classes.button}
    onClick={() => history.push("/upload")}
  >
    New Document
  </Button>
  // <Button className={classes.button}>Documents</Button>,
  // <Button className={classes.button}>Notifications</Button>,
  // <Button className={classes.button}>Settings</Button>,
  // <Button key="log-out-nav" onClick={handleLogout} className={classes.button}>
  //   Log Out
  // </Button>
];

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return <div className={classes.sidebarRoot}>{buttons(history, classes)}</div>;
};

export default SideBar;
