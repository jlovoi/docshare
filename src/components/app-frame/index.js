import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  appframe: {
    backgroundColor: "#f1eee4",
    minHeight: "95vh",
    padding: "24px"
  }
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.appframe}>{children}</div>;
};

export default AppFrame;
