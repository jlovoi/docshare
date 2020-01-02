import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f1eee4",
    minHeight: "100vh",
    minWidth: "100vw"
  }
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default AppFrame;
