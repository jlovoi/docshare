import { connect } from "react-redux";

import Core from "../../../web-core";

import Component from "../view";

const mapDispatchToProps = dispatch => ({
  downloadFile: docId => dispatch(Core.doc.actions.downloadFile(docId))
});

export default connect(null, mapDispatchToProps)(Component);
