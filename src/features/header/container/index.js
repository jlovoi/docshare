import React from "react";
import { connect } from "react-redux";
import Component from "../view";

import Core from "../../../web-core";

const { getFullName, getTitle } = Core.user.selectors;

const Container = ({ name, title }) => {
  return <Component name={name} title={title} />;
};

const mapStateToProps = state => ({
  name: getFullName(state),
  title: getTitle(state)
});

export default connect(mapStateToProps)(Container);
