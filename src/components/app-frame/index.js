import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  appframe: {
    backgroundColor: "#fafafa",
    minHeight: "95vh"
  }
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.appframe}>{children}</div>;
};

export default AppFrame;
