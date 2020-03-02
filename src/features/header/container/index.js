import React from "react";
import { connect } from "react-redux";
import Component from "../view";

import Core from "../../../web-core";

const { getFullName, getTitle } = Core.user.selectors;
const { getNextApprover } = Core.doc.selectors;

const Container = ({ name, title, nextApprover }) => {
  return <Component name={name} title={title} nextApprover={nextApprover} />;
};

const mapStateToProps = state => ({
  name: getFullName(state),
  title: getTitle(state),
  nextApprover: getNextApprover(state)
});

export default connect(mapStateToProps)(Container);
