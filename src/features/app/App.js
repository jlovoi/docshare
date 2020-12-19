import React from 'react';
import { Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { AppFrame } from '../../components';
import {
	Header,
	Home,
	SideBar,
	Upload,
	Workflow,
	CommentsSection,
} from '../index';
import withAuth from '../../auth';
import theme from './theme';
import LandingPage from '../login/landingPage';

const useStyles = makeStyles(theme => ({
	appFlex: {
		display: 'flex',
		flexDirection: 'row',
	},
	sideBar: {
		flex: 1,
	},
	appContent: {
		position: 'relative',
		paddingTop: '120px',
		paddingBottom: '24px',
		flex: 4,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const App = ({ history, handleLogout }) => {
	const classes = useStyles();

	return (
		<AppFrame>
			<Router history={history}>
				<ThemeProvider theme={theme}>
					<Route
						render={({ location }) =>
							location.pathname === '/landing-page' ? null : (
								<Header handleLogout={handleLogout} />
							)
						}
					/>
					<div className={classes.appFlex}>
						<Route
							render={({ location }) =>
								location.pathname === '/landing-page' ? null : (
									<div className={classes.sideBar}>
										<SideBar />
									</div>
								)
							}
						/>
						<div className={classes.appContent}>
							<Route path="/docs" component={Workflow} />
							<Route path="/docs" component={CommentsSection} />
							<Route path="/upload" component={Upload} />
							<Route exact path="/" component={Home} />
							<Route
								path="/landing-page"
								component={() => (
									<LandingPage handleLogout={handleLogout} history={history} />
								)}
							/>
						</div>
					</div>
				</ThemeProvider>
			</Router>
		</AppFrame>
	);
};

export default withAuth(App);
