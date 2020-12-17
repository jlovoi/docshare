import React from "react";
import { connect } from "react-redux";
import Component from "../view";

import Core from "../../../web-core";
import { getOrganizationName } from "../../../web-core/organization/selectors";

const { getFullName, getTitle } = Core.user.selectors;
const { getNextApprover } = Core.doc.selectors;

const Container = ({
  name,
  title,
  organization,
  nextApprover,
  handleLogout
}) => {
  return (
    <Component
      name={name}
      title={title}
      organization={organization}
      nextApprover={nextApprover}
      handleLogout={handleLogout}
    />
  );
};

const mapStateToProps = state => ({
  name: getFullName(state),
  title: getTitle(state),
  organization: getOrganizationName(state),
  nextApprover: getNextApprover(state)
});

export default connect(mapStateToProps)(Container);
