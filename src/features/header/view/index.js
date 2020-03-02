import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { User } from "../../../components";

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

const buttons = (history, classes) => [
  <Button
    key="home-nav"
    className={classes.button}
    onClick={() => history.push("/")}
  >
    Your Documents
  </Button>,
  <Button
    key="new-doc-nav"
    className={classes.button}
    onClick={() => history.push("/upload")}
  >
    New Document
  </Button>,
  // <Button className={classes.button}>Documents</Button>,
  // <Button className={classes.button}>Notifications</Button>,
  // <Button className={classes.button}>Settings</Button>,
  <Button key="log-out-nav" className={classes.button}>
    Log Out
  </Button>
];

const Component = ({ name, title, nextApprover }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.flex}>
      <div className={classes.header}>
        <div className={classes.title}>Review Status</div>
        <div className={classes.subTitle}>
          {`Awaiting Review from ${nextApprover.firstName +
            " " +
            nextApprover.lastName}`}
        </div>
      </div>
      <User
        name={name}
        title={title}
        popoverContent={buttons(history, classes)}
      />
    </div>
  );
};

export default Component;
