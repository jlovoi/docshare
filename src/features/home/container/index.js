import React, { useEffect } from "react";
import { connect } from "react-redux";

import Core from "../../../web-core";

import Component from "../view";

const Container = props => {
  const { userId, fetchUserDocs } = props;

  useEffect(() => {
    fetchUserDocs(userId);
  }, [userId, fetchUserDocs]);

  return <Component {...props} />;
};

const mapStateToProps = state => ({
  userDocs: Core.doc.selectors.getUsersDocs(state),
  userId: Core.user.selectors.getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserDocs: id => dispatch(Core.doc.actions.fetchUsersDocsInit(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
