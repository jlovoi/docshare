import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import CancelIcon from "@material-ui/icons/Cancel";

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
    minWidth: "500px",
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
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  },
  marginLeft: {
    marginLeft: "auto"
  }
}));

export default ({ step, description, content, error, subContent, onClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.stepBox}>
      <div className={classes.flex}>
        <div className={classes.step}>{`Step ${step}`}</div>
        <IconButton className={classes.marginLeft} onClick={onClose}>
          <CancelIcon />
        </IconButton>
      </div>
      <div className={classes.description}>{description}</div>
      {content}
      {error && <div className={classes.error}>{error}</div>}
      {subContent}
    </div>
  );
};