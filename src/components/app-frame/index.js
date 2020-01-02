import React from "react";
import { createStyles } from "@material-ui/styles";

const useStyles = createStyles(() => ({
  root: {
    backgroundColor: "#fbfbfb",
    minHeight: "100vh",
    minWidth: "100vw"
  }
}));

const AppFrame = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default AppFrame;
