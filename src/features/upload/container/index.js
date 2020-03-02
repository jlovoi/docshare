import { connect } from "react-redux";

import Core from "../../../web-core";

import Component from "../view";

const { submitDocInit } = Core.doc.actions;

const mapStateToProps = state => ({
  users: Core.users.selectors.users(state),
  userId: Core.user.selectors.getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  submitDoc: doc => dispatch(submitDocInit(doc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
