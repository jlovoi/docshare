import React, { Component } from 'react';
import AuthHelperMethods from './authHelpers';
import LandingPage from '../features/login/landingPage';
import Core from '../web-core';

import LoadUser from './LoadUser';

export default ChildComponent => {
	const Auth = new AuthHelperMethods();

	return class AuthWrapped extends Component {
		state = {
			confirm: null,
			loaded: false,
			logged: false,
		};

		handleLogin = async (username, password, dispatch) => {
			const logged = await Auth.login(username, password);
			if (logged.success) {
				const confirm = Auth.getConfirm();
				this.setState({ confirm });
				dispatch(Core.auth.actions.setConfirmation(confirm));
				this.props.history.push('/');
				this.setState({ logged: true });
				setTimeout(() => window.location.reload(), 500);
			}
		};

		handleLogout = () => {
			this.setState({ confirm: null });
			Auth.logout();
			setTimeout(() => {
				this.props.history.replace('/login');
				window.location.reload();
			}, 500);
		};

		componentDidMount() {
			if (!Auth.loggedIn()) {
				this.props.history.replace('/login');
			} else {
				try {
					const confirm = Auth.getConfirm();
					this.setState({
						confirm: confirm,
						loaded: true,
					});
				} catch (err) {
					console.error(err);
					Auth.logout();
					this.props.history.replace('/login');
				}
			}
		}

		render() {
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
						<LandingPage
							history={this.props.history}
							handleLogin={this.handleLogin}
						/>
					);
				}
			} else {
				return (
					<LandingPage
						history={this.props.history}
						handleLogin={this.handleLogin}
					/>
				);
			}
		}
	};
};
