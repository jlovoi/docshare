import React from "react";
import { connect } from "react-redux";

import Component from "../view";

const Container = ({ doc }) => {
  return <Component />;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Container);
