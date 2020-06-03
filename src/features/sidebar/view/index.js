import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sidebarRoot: {
    backgroundColor: "#ededed",
    height: "90vh",
    position: "fixed",
    width: "20%",
    maxWidth: "250px"
  }
}));

const SideBar = () => {
  const classes = useStyles();

  return <div className={classes.sidebarRoot}>Sidebar</div>;
};

export default SideBar;
