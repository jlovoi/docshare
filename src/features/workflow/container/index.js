import { connect } from "react-redux";

import Component from "../view";

import Core from "../../../web-core";

const mapStateToProps = state => ({
  users: Core.doc.selectors.getDocUsers(state),
  docInfo: Core.doc.selectors.getDocInfo(state),
  insertsInfo: Core.doc.selectors.getInsertsInfo(state)
});

export default connect(mapStateToProps)(Component);
