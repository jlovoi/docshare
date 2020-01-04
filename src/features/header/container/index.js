import React from "react";
import { connect } from "react-redux";
import Component from "../view";

import { getFullName, getTitle } from "../../../web-core/user/selectors";

const Container = ({ name, title }) => {
  return <Component name={name} title={title} />;
};

const mapStateToProps = state => ({
  name: getFullName(state),
  title: getTitle(state)
});

export default connect(mapStateToProps, {})(Container);
