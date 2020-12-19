import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faRoute,
	faTachometerAlt,
	faUserCheck,
} from '@fortawesome/free-solid-svg-icons';

import LoginModal from './loginModal';

import './landingpage.css';
import highNoonLogo from './assets/highNoonLogo.png';
import projectOverview from './assets/ProjectOverview-1.png';
import chartRevision from './assets/ChartRevision-2.png';
import edits from './assets/Edits.png';
import { User } from '../../components';
import { getFullName, getUser, getTitle } from '../../web-core/user/selectors';
import { getOrganizationName } from '../../web-core/organization/selectors';

const useStyles = makeStyles(theme => ({
	button: {
		width: '100%',
		height: '30px',
		textTransform: 'none',
	},
	logIn: {
		backgroundColor: '#0f7173',
		textTransform: 'none',
		color: '#ffffff',
		marginTop: '32px',
		height: '42px',
	},
	dropTop: {
		marginTop: '-120px',
	},
	header: {
		backgroundColor: '#f2f2f2',
		display: 'flex',
		height: '10rem',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0px 64px 0px 64px',
	},
	whiteFont: {
		color: '#ffffff',
	},
	features: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0px 10% 0px 10%',
	},
	footer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '0px 24px 0px 24px',
	},
	rowWithImg: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		minHeight: '24rem',
		marginBottom: '24px',
	},
	img: {
		minWidth: '42rem',
		backgroundSize: 'cover',
	},
	margin: {
		marginRight: '24px',
	},
	icon: {
		fontSize: '5.5rem',
		color: '#dc143c',
	},
}));

const buttons = (history, handleLogout, classes) => [
	<Button
		key="home-nav"
		className={classes.button}
		onClick={() => history.push('/')}
	>
		Your Documents
	</Button>,
	<Button
		key="new-doc-nav"
		className={classes.button}
		onClick={() => history.push('/upload')}
	>
		New Document
	</Button>,
	// <Button className={classes.button}>Documents</Button>,
	// <Button className={classes.button}>Notifications</Button>,
	// <Button className={classes.button}>Settings</Button>,
	<Button key="log-out-nav" onClick={handleLogout} className={classes.button}>
		Log Out
	</Button>,
];

const LandingPage = ({
	handleLogin,
	user,
	name,
	title,
	organization,
	handleLogout,
	history,
}) => {
	const classes = useStyles();

	const [openModal, setOpenModal] = useState(false);

	return (
		<div
			className={
				history.location.pathname === '/landing-page' ? classes.dropTop : {}
			}
		>
			<nav className={classes.header}>
				<img src={highNoonLogo} alt="High" />
				{user && user._id ? (
					<User
						name={name}
						title={title}
						organization={organization}
						popoverContent={buttons(history, handleLogout, classes)}
					/>
				) : (
					<Button
						className={classes.logIn}
						onClick={() => setOpenModal(!openModal)}
					>
						Log In!
					</Button>
				)}
			</nav>

			<LoginModal
				handleLogin={handleLogin}
				open={openModal}
				setOpen={setOpenModal}
			/>

			<section className="features-icons bg-light text-center">
				<div className="container">
					<div className={classes.features}>
						<div className="col-lg-4">
							<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
								<div className="features-icons-icon d-flex">
									<FontAwesomeIcon className={classes.icon} icon={faRoute} />
								</div>
								<h3>Visualize Approval Flow</h3>
								<p className="lead mb-0">
									Quickly see the evolution of a <br />
									revised document.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
								<div className="features-icons-icon d-flex">
									<FontAwesomeIcon
										className={classes.icon}
										icon={faTachometerAlt}
									/>
								</div>
								<h3>Rapid Revisioning</h3>
								<p className="lead mb-0">
									Speed up average revision time to better meet client demands.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="features-icons-item mx-auto mb-0 mb-lg-3">
								<div className="features-icons-icon d-flex">
									<FontAwesomeIcon
										className={classes.icon}
										icon={faUserCheck}
									/>
								</div>
								<h3>User Centered</h3>
								<p className="lead mb-0">
									Frees up your employees' time and ensures confidence in
									revisions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="showcase">
				<div className="container-fluid p-0">
					<div className={classes.rowWithImg}>
						<div className="col-lg-6 order-lg-1 my-auto showcase-text">
							<h2>Don't Miss a Beat</h2>
							<p className="lead mb-0">
								Quickly get a snapshot of the in-process documents requiring
								your attention.
							</p>
						</div>
						<div
							className={classes.img}
							style={{
								backgroundImage: `url(${projectOverview})`,
							}}
						></div>
					</div>
					<div className={classes.rowWithImg}>
						<div
							className={classes.img}
							style={{ backgroundImage: `url(${chartRevision})` }}
						></div>
						<div className="col-lg-6 my-auto showcase-text">
							<h2>Flexible Revision Flows</h2>
							<p className="lead mb-0">
								Dynamically add revisers to your documents, whether they're an
								editor or just there to view the changes.
							</p>
						</div>
					</div>
					<div className={classes.rowWithImg}>
						<div className="col-lg-6 order-lg-2 text-white showcase-img"></div>
						<div className="col-lg-6 order-lg-1 my-auto showcase-text">
							<h2>Document Changes, Visualized</h2>
							<p className="lead mb-0">
								Provides a simplied view of the latest changes to ensure you can
								quickly provide input and progress forward.
							</p>
						</div>
						<div
							className={classes.img}
							style={{
								backgroundImage: `url(${edits})`,
							}}
						></div>
					</div>
				</div>
			</section>

			<footer className="footer bg-light">
				<div className="container">
					<div className={classes.footer}>
						<div className="col-lg-6 h-100 text-center text-lg-left my-auto">
							{/* <a href="#" className={classes.margin}>
                About
              </a>
              <a href="#" className={classes.margin}>
                Contact
              </a> */}
							<p className="text-muted small mb-4 mb-lg-0">
								&copy; HighNoon 2020. All Rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

const mapStateToProps = state => ({
	user: getUser(state),
	name: getFullName(state),
	title: getTitle(state),
	organization: getOrganizationName(state),
});

export default connect(mapStateToProps)(LandingPage);
