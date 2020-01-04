import React from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles(() => ({
  root: {
    height: "120px",
    width: "120px",
    marginRight: "60px",
    marginLeft: "60px"
  },
  avatar: {
    height: "120px",
    width: "120px",
    position: "relative",
    zIndex: 1
  },
  check: {
    position: "absolute",
    height: "20px",
    width: "20px"
  },
  line: {
    borderRadius: "8px",
    width: "150%",
    border: "3px solid #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0,
    right: "150%"
  },
  dashedLine: {
    borderRadius: "8px",
    width: "150%",
    border: "3px dashed #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0,
    right: "150%"
  }
}));

const showLine = (first, check, classes) => {
  if (!first && check) {
    return <div className={classes.line} />;
  } else if (!first && !check) {
    return <div className={classes.dashedLine} />;
  }
  return <div />;
};

const Component = ({ avatar, check = false, first = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {check ? (
        <CheckCircleIcon className={classes.check} />
      ) : (
        <div className={classes.check} />
      )}
      <Avatar className={classes.avatar} src={avatar} />
      {showLine(first, check, classes)}
    </div>
  );
};

export default Component;
