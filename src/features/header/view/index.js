import React from "react";
import { makeStyles } from "@material-ui/styles";
import { User } from "../../../components";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "120px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 10
  }
}));

const Component = ({ name, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <User name={name} title={title} />
    </div>
  );
};

export default Component;
