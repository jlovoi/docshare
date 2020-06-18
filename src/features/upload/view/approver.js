import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import TrashCan from "@material-ui/icons/Delete";
import ArrowUp from "@material-ui/icons/ArrowDropUp";
import ArrowDown from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles(theme => ({
  approverRoot: {
    border: "2px solid gray",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "row",
    minWidth: "600px",
    width: "60%",
    alignSelf: "self-start",
    margin: "12px",
    position: "relative"
  },
  approverType: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
    justifyContent: "center",
    marginRight: "48px"
  },
  arrowButton: {
    width: "12px"
  },
  button: {
    backgroundColor: "#bdbdbd",
    textTransform: "none",
    margin: "6px"
  },
  deleteButton: {
    position: "absolute",
    bottom: "0px",
    right: "0px"
  },
  reorder: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  selectedButton: {
    backgroundColor: "#008cff",
    textTransform: "none",
    margin: "6px"
  },
  textField: {
    width: "80%",
    margin: "12px"
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    flex: 10
  }
}));

export default ({
  name,
  email,
  index,
  length,
  move,
  onDelete,
  type,
  setter
}) => {
  const classes = useStyles();

  return (
    <div className={classes.approverRoot}>
      <div className={classes.reorder}>
        <Button
          className={classes.arrowButton}
          disabled={index === 0}
          onClick={() => move(index, index - 1)}
        >
          <ArrowUp />
        </Button>
        {index + 1}
        <Button
          className={classes.arrowButton}
          disabled={index + 1 === length}
          onClick={() => move(index, index + 1)}
        >
          <ArrowDown />
        </Button>
      </div>
      <div className={classes.userInfo}>
        <div>
          <TextField
            className={classes.textField}
            value={name}
            label={"Name"}
            onChange={e => setter("name", e.target.value)}
          />
        </div>
        <div>
          <TextField
            className={classes.textField}
            value={email}
            label={"Email"}
            onChange={e => setter("email", e.target.value)}
          />
        </div>
      </div>
      <div className={classes.approverType}>
        <div>This person is an...</div>
        <Button
          onClick={() => setter("type", "editor")}
          className={
            type === "editor" ? classes.selectedButton : classes.button
          }
        >
          Editor
        </Button>
        <Button
          onClick={() => setter("type", "approver")}
          className={
            type === "approver" ? classes.selectedButton : classes.button
          }
        >
          Approver
        </Button>
      </div>{" "}
      {index !== 0 && (
        <IconButton className={classes.deleteButton} onClick={onDelete}>
          <TrashCan />
        </IconButton>
      )}
    </div>
  );
};
