import React from "react";
import { connect } from "react-redux";

import Component from "../view";

import * as Core from "../../../web-core";

const Container = ({ doc }) => {
  console.log(doc);
  return <Component doc={doc} users={doc.users} />;
};

const mapStateToProps = state => ({
  doc: Core.doc.selectors.getDocument(state)
});

export default connect(mapStateToProps)(Container);
