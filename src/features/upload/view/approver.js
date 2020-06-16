import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  approverRoot: {
    border: "2px solid gray",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    flexDirection: "row",
    minWidth: "500px",
    width: "60%",
    alignSelf: "self-start"
  },
  approverType: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#bdbdbd",
    textTransform: "none",
    margin: "6px"
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
    flex: 2
  }
}));

export default ({ name, email, type, setter }) => {
  const classes = useStyles();

  return (
    <div className={classes.approverRoot}>
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
      </div>
    </div>
  );
};
