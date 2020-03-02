import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/Textfield";
import { resolve } from "upath";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1eee4"
  },
  box: {
    width: "60%",
    height: "300px",
    padding: "48px",
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "50%",
    margin: "18px"
  },
  login: {
    backgroundColor: "darkseagreen",
    width: "95px",
    margin: "24px"
  },
  register: {
    backgroundColor: "dodgerblue",
    width: "95px",
    margin: "24px"
  }
}));

const register = (username, password, setRegistered) => {
  fetch(`http://localhost:3000/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => {
    return resolve(res);
  });
};

const LogIn = ({ history, handleLogin }) => {
  const classes = useStyles();

  const [registered, setRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        Register or Log In!
        <Textfield
          className={classes.input}
          value={userName}
          label="User Name"
          onChange={e => setUserName(e.target.value)}
        />
        <Textfield
          className={classes.input}
          type="password"
          value={password}
          label="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <div className={classes.buttonGroup}>
          <Button
            className={classes.register}
            onClick={() => register(userName, password, setRegistered)}
          >
            Register
          </Button>
          <Button
            className={classes.login}
            onClick={() => {
              handleLogin(userName, password);
              history.push("/home");
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
