import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  description: {
    fontSize: "14px"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },
  stepBox: {
    marginTop: "24px",
    width: "60%",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#d7d7d7"
  },
  step: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "underline"
  }
}));

export default ({ step, description, content, error, subContent }) => {
  const classes = useStyles();
  return (
    <div className={classes.stepBox}>
      <div className={classes.step}>{`Step ${step}`}</div>
      <div className={classes.description}>{description}</div>
      {content}
      {error && <div className={classes.error}>{error}</div>}
      {subContent}
    </div>
  );
};
