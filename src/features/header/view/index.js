import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { User } from "../../../components";
import logo from "../../login/assets/highNoonLogo.png";

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "30px",
    textTransform: "none"
  },
  header: {
    height: "32px",
    padding: "12px",
    display: "flex",
    flexDirection: "row"
  },
  logo: {
    position: "relative",
    top: "-58px",
    height: "150px",
    width: "160px"
  },
  subTitle: {
    fontSize: "14px",
    color: "#ffffff"
  },
  flex: {
    backgroundColor: theme.palette.offwhite,
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    borderBottom: "2px solid #f1eee4",
    position: "fixed"
  },
  divider: {
    borderWidth: "1px",
    borderRadius: "8px",
    height: "150%",
    borderColor: "grey",
    borderStyle: "solid",
    marginLeft: "14px"
  },
  noFlex: {
    display: "initial"
  }
}));

const buttons = (history, handleLogout, classes) => [
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
  <Button key="log-out-nav" onClick={handleLogout} className={classes.button}>
    Log Out
  </Button>
];

const Component = ({
  name,
  title,
  organization,
  nextApprover,
  handleLogout
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();

  return (
    <div className={classes.flex}>
      <div className={classes.header}>
        <div className={classes.noFlex}>
          <img
            onClick={() => history.push("/")}
            className={classes.logo}
            src={logo}
            alt="High Noon"
          />
          <div className={classes.subTitle}>
            {nextApprover.firstName &&
              `Awaiting Review from ${nextApprover.firstName +
                " " +
                nextApprover.lastName}`}
          </div>
        </div>
        <div className={classes.divider} />
      </div>
      <User
        name={name}
        title={title}
        organization={organization}
        popoverContent={buttons(history, handleLogout, classes)}
      />
    </div>
  );
};

export default Component;
