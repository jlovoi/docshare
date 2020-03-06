import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";

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
    padding: "48px",
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "18px"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "500px"
  },
  divider: {
    border: ".5px solid black",
    height: "0px",
    width: "200px"
  },
  small: {
    fontSize: "10px"
  },
  input: {
    width: "50%",
    margin: "9px"
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

const register = (
  username,
  password,
  firstName,
  lastName,
  email,
  title,
  setRegistered,
  setError
) => {
  fetch(`http://localhost:3000/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName,
      email,
      title
    })
  }).then(res => {
    if (res.ok) {
      setRegistered(true);
      setError(false);
    } else {
      setError(true);
      setRegistered(false);
    }
    return res;
  });
};

const LogIn = ({ history, handleLogin }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const loginDisabled = !userName || !password;
  const regDisabled =
    loginDisabled || !email || !title || !firstName || !lastName;

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        Log In
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
            className={classes.login}
            onClick={() => {
              handleLogin(userName, password, dispatch);
              history.push("/home");
            }}
            disabled={loginDisabled}
          >
            Log In
          </Button>
        </div>
        <div className={classes.group}>
          <div className={classes.divider} />
          <div className={classes.small}>OR</div>
          <div className={classes.divider} />
        </div>
        Fill in the Rest to Register
        <div className={classes.inputGroup}>
          <Textfield
            className={classes.input}
            value={firstName}
            label="First Name"
            onChange={e => setFirstName(e.target.value)}
          />
          <Textfield
            className={classes.input}
            value={lastName}
            label="Last Name"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className={classes.inputGroup}>
          <Textfield
            className={classes.input}
            value={email}
            label="Email"
            onChange={e => setEmail(e.target.value)}
          />
          <Textfield
            className={classes.input}
            value={title}
            label="Title / Company Role"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <Button
          className={classes.register}
          onClick={() =>
            register(
              userName,
              password,
              firstName,
              lastName,
              email,
              title,
              setRegistered,
              setError
            )
          }
          disabled={regDisabled}
        >
          Register
        </Button>
        <div className={classes.buttonGroup}>
          {registered &&
            "Successfully Registered! Now login with those same credentials"}
          {error && "Could not register that username, please try another"}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
