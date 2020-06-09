import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  appframe: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  }
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.appframe}>{children}</div>;
};

export default AppFrame;
