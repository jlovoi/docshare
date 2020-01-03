import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  header: {
    height: "32px",
    padding: "12px"
  },
  border: {
    borderBottom: "2px solid black"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: "14px"
  }
}));

const Workflow = ({ reviewer }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.border}>
        <div className={classes.title}>Review Status</div>
        <div className={classes.subTitle}>Awaiting Review from Frett Bene</div>
      </div>
    </div>
  );
};

export default Workflow;
