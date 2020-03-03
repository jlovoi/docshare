import React, { Component } from "react";
import AuthHelperMethods from "./authHelpers";
import { LogIn } from "../features";
import Core from "../web-core";

import LoadUser from "./LoadUser";

export default ChildComponent => {
  const Auth = new AuthHelperMethods();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    };

    handleLogin = async (username, password, dispatch) => {
      const logged = await Auth.login(username, password);
      if (logged.success) {
        this.props.history.push("/home");
        const confirm = Auth.getConfirm();
        this.setState({ confirm });
        dispatch(Core.auth.actions.setConfirmation(confirm));
      }
    };

    handleLogout = () => {
      this.setState({ confirm: null });
      Auth.logout();
      this.props.history.replace("/login");
    };

    componentDidMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/login");
      } else {
        try {
          const confirm = Auth.getConfirm();
          this.setState({
            confirm: confirm,
            loaded: true
          });
        } catch (err) {
          console.error(err);
          Auth.logout();
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      console.log("confirm", this.state.confirm);
      if (this.state.loaded === true) {
        if (this.state.confirm) {
          return (
            <LoadUser confirmation={this.state.confirm}>
              <ChildComponent
                history={this.props.history}
                confirm={this.state.confirm}
                handleLogout={this.handleLogout}
              />
            </LoadUser>
          );
        } else {
          return (
            <LogIn
              history={this.props.history}
              handleLogin={this.handleLogin}
            />
          );
        }
      } else {
        return (
          <LogIn history={this.props.history} handleLogin={this.handleLogin} />
        );
      }
    }
  };
};
