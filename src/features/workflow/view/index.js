import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  header: {
    height: "32px",
    padding: "12px"
  },
  border: {
    borderBottom: "2px solid black"
  },
  box: {
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    height: "300px",
    width: "90%",
    margin: "2.5%",
    padding: "2.5%"
  },
  progress: {
    position: "relative",
    top: "40%"
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
      <Box className={classes.box}>
        <LinearProgress
          className={classes.progress}
          color="primary"
          variant="determinate"
          value={50}
        />
      </Box>
    </div>
  );
};

export default Workflow;
