import React from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

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
    //    color: "#16B900"
  },
  waiting: {
    position: "absolute",
    height: "20px",
    width: "20px"
  },
  line: {
    borderRadius: "8px",
    width: "150%",
    border: "2px solid #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0,
    right: "150%"
  },
  name: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dashedLine: {
    borderRadius: "8px",
    width: "150%",
    border: "2px dashed #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0,
    right: "150%"
  },
  dummyLine: {
    borderRadius: "8px",
    width: "1%",
    border: "2px dashed #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0
  }
}));

const showLine = (first, check, classes) => {
  if (!first && check) {
    return <div className={classes.line} />;
  } else if (!first && !check) {
    return <div className={classes.dashedLine} />;
  }
  return <div className={classes.dummyLine} />;
};

const Component = ({
  avatar,
  check = false,
  first = false,
  fullName = "Joel Ovoi"
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {check ? (
        <CheckCircleIcon className={classes.check} />
      ) : (
        <QueryBuilderIcon className={classes.waiting} />
      )}
      <Avatar className={classes.avatar} src={avatar} />
      {showLine(first, check, classes)}
      <div className={classes.name}>{fullName}</div>
    </div>
  );
};

export default Component;
