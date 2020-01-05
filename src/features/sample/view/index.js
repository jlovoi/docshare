import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "120px",
    zIndex: 10
  }
}));

const Component = () => {
  const classes = useStyles();

  return <div className={classes.root}>Component</div>;
};

export default Component;
