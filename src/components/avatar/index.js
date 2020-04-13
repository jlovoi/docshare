import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const useStyles = makeStyles(() => ({
  avatarRoot: {
    height: "120px",
    width: "120px",
    margin: "60px"
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
    height: "150%",
    width: "0px",
    border: "2px solid #040404",
    position: "relative",
    bottom: "250%",
    zIndex: 0,
    left: "50%"
  },
  info: {
    padding: "6px"
  },
  name: {
    fontSize: "16px"
  },
  dashedLine: {
    borderRadius: "8px",
    height: "150%",
    width: "0px",
    border: "2px dashed #040404",
    position: "relative",
    bottom: "250%",
    zIndex: 0,
    left: "50%"
  },
  dummyLine: {
    borderRadius: "8px",
    width: "1%",
    border: "2px dashed #040404",
    position: "relative",
    bottom: "50%",
    zIndex: 0
  },
  popover: {
    position: "fixed !important",
    left: "125px !important"
  },
  title: {
    fontSize: "12px"
  }
}));

const showLine = (first, fillLine, classes) => {
  if (!first && fillLine) {
    return <div className={classes.line} />;
  } else if (!first && !fillLine) {
    return <div className={classes.dashedLine} />;
  }
  return <div className={classes.dummyLine} />;
};

const Component = ({
  avatar,
  check = false,
  fillLine = false,
  first = false,
  fullName = "Joel Ovoi",
  title
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className={classes.avatarRoot}>
      {check ? (
        <CheckCircleIcon className={classes.check} />
      ) : (
        <QueryBuilderIcon className={classes.waiting} />
      )}
      <Avatar
        className={classes.avatar}
        src={avatar}
        onClick={e => setAnchorEl(e.currentTarget)}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        className={classes.popover}
      >
        <div className={classes.info}>
          <div className={classes.name}>{fullName}</div>
          <div className={classes.title}>{title}</div>
        </div>
      </Popover>
      {showLine(first, fillLine, classes)}
    </div>
  );
};

export default Component;
