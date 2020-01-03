import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";

import SampleAvatar from "./avatar.jpg";

const useStyles = makeStyles(() => ({
  root: {
    height: "60px",
    width: "400px",
    display: "flex",
    flexDirection: "row",
    "& > *": {
      margin: "12px",
      marginTop: "0px"
    }
  },
  avatar: {
    height: "60px",
    width: "60px"
  },
  name: {
    flex: 2,
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    textAlign: "right",
    marginTop: "12px",
    position: "relative",
    left: "18px"
  },
  popover: {
    position: "absolute !important",
    left: "200px !important",
    top: "70px !important"
  },
  popoverContent: {
    height: "150px",
    width: "190px",
    backgroundColor: "#D9D2D1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  button: {
    width: "100%",
    height: "30px",
    textTransform: "none"
  },
  title: {
    fontSize: "12px"
  }
}));

const handleClick = (anchorEl, setAnchorEl) => event => {
  if (!anchorEl) setAnchorEl(event.currentTarget);
  else setAnchorEl(null);
};

const User = ({ name, title }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <div
        className={classes.root}
        onClick={handleClick(anchorEl, setAnchorEl)}
      >
        <div className={classes.name}>
          {name}
          <div className={classes.title}>{title}</div>
        </div>
        <Avatar className={classes.avatar} src={SampleAvatar} />
        <Popover
          className={classes.popover}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
        >
          <div className={classes.popoverContent}>
            <Button className={classes.button}>Documents</Button>
            <Button className={classes.button}>Notifications</Button>
            <Button className={classes.button}>Inbox</Button>
            <Button className={classes.button}>Settings</Button>
            <Button className={classes.button}>Log Out</Button>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default User;
