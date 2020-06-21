import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "darkseagreen",
    textTransform: "none",
    marginTop: "32px"
  },
  description: {
    fontSize: "14px"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },
  stepBox: {
    minWidth: "400px",
    marginTop: "24px",
    width: "100%",
    padding: "24px 0px 24px 0px",
    borderRadius: "8px"
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
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  marginLeft: {
    marginLeft: "auto"
  }
}));

export default ({
  step,
  description,
  content,
  error,
  subContent,
  onClose,
  onAccept,
  disabled
}) => {
  const classes = useStyles();
  return (
    <div className={classes.stepBox}>
      <div className={classes.flex}>
        <div className={classes.step}>{`Step ${step}`}</div>
        {onClose && (
          <IconButton className={classes.marginLeft} onClick={onClose}>
            <CancelIcon />
          </IconButton>
        )}
      </div>
      <div className={classes.description}>{description}</div>
      {content}
      {error && <div className={classes.error}>{error}</div>}
      {subContent}
      <div className={classes.center}>
        {onAccept && (
          <Button
            className={classes.button}
            disabled={disabled}
            onClick={onAccept()}
          >
            Accept File
          </Button>
        )}
      </div>
    </div>
  );
};
