import React, { Component } from "react";
import AuthHelperMethods from "./authHelpers";
import { LogIn } from "../features";
import user from "../api-core/user";

export default ChildComponent => {
  const Auth = new AuthHelperMethods();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    };

    handleLogin = async (username, password) => {
      const logged = await Auth.login(username, password);
      if (logged.success) {
        this.setState({ confirm: Auth.getConfirm() });
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
      if (this.state.loaded === true) {
        if (this.state.confirm) {
          return (
            <ChildComponent
              history={this.props.history}
              confirm={this.state.confirm}
              handleLogout={this.handleLogout}
            />
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
