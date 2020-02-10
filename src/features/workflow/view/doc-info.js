import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    height: "80vh",
    width: "73%",
    left: "25%"
  }
}));

const DocInfo = ({ docInfo }) => {
  const classes = useStyles();

  return <div className={classes.root}>DOC INFO!</div>;
};

export default DocInfo;
