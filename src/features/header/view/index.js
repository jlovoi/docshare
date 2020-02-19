import React from "react";
import { makeStyles } from "@material-ui/styles";
import { User } from "../../../components";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  button: {
    width: "100%",
    height: "30px",
    textTransform: "none"
  },
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
  }
}));

const buttons = classes => [
  <Button key="new-doc-nav" className={classes.button}>
    New Doc
  </Button>,
  // <Button className={classes.button}>Documents</Button>,
  // <Button className={classes.button}>Notifications</Button>,
  // <Button className={classes.button}>Settings</Button>,
  <Button key="log-out-nav" className={classes.button}>
    Log Out
  </Button>
];

const Component = ({ name, title, awaitingUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      <div className={classes.header}>
        <div className={classes.title}>Review Status</div>
        <div className={classes.subTitle}>
          {`Awaiting Review from ${awaitingUser || "Frett Bene"}`}
        </div>
      </div>
      <User name={name} title={title} popoverContent={buttons(classes)} />
    </div>
  );
};

export default Component;
