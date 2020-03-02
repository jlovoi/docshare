import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bubbleRoot: {
    padding: "18px",
    display: "flex",
    flexDirection: "row"
  },
  bubble: {
    borderRadius: "12px",
    borderBottomLeftRadius: "0px",
    width: "200px",
    padding: "12px",
    backgroundColor: "#d7d7d7"
  },
  extend: {
    height: "12px",
    width: "11px",
    background:
      "radial-gradient(circle at top left,transparent 11px,#d7d7d7 0) top left"
  },
  leftBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }
}));

const Bubble = ({ title, subTitle, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.bubbleRoot}>
      <div className={classes.leftBox}>
        <div className={classes.extend} />
      </div>
      <div className={classes.bubble}>title</div>
    </div>
  );
};

export default Bubble;
