import React, { useEffect } from "react";
import { connect } from "react-redux";

import Core from "../../../web-core";
import API from "../../../api-core";

import Component from "../view";

const UploadContainer = props => {
  const { organizationId } = props;
  const organizationUsers = [];
  useEffect(() => {
    const getOrgUsers = async id =>
      await API.organization.fetchUsersByOrganization(id);
    if (organizationId) {
      getOrgUsers(organizationId).then(val => organizationUsers.push(...val));
    }
  }, [organizationId, organizationUsers]);

  return <Component {...props} organizationUsers={organizationUsers} />;
};

const { submitDocInit } = Core.doc.actions;

const mapStateToProps = state => ({
  user: Core.user.selectors.getUser(state),
  userId: Core.user.selectors.getUserId(state),
  organizationId: Core.org.selectors.getOrganizationId(state)
});

const mapDispatchToProps = dispatch => ({
  submitDoc: doc => dispatch(submitDocInit(doc))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
