import React from "react";
import { makeStyles } from "@material-ui/styles";
import { User } from "../../../components";

const useStyles = makeStyles(() => ({
  header: {
    height: "32px",
    padding: "12px"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: "14px"
  },
  flex: {
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    borderBottom: "2px solid black"
  },
  root: {
    padding: "24px",
    paddingTop: "12px"
  }
}));

const Component = ({ name, title, awaitingUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.header}>
          <div className={classes.title}>Review Status</div>
          <div className={classes.subTitle}>
            {`Awaiting Review from ${awaitingUser || "Frett Bene"}`}
          </div>
        </div>
        <User name={name} title={title} />
      </div>
    </div>
  );
};

export default Component;
