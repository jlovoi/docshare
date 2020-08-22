import { connect } from "react-redux";

import Core from "../../../web-core";

import Component from "../view";

const { submitDocInit } = Core.doc.actions;

const mapStateToProps = state => ({
  user: Core.user.selectors.getUser(state),
  userId: Core.user.selectors.getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  submitDoc: doc => dispatch(submitDocInit(doc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
