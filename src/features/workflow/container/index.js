import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Component from "../view";

import Core from "../../../web-core";

const Container = ({
  document = {},
  users = [],
  docInfo = {},
  insertsInfo = {},
  deletesInfo = {},
  approveDocument = () => {},
  userId = "",
  patchFile = () => {}
}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const docId = location.pathname.substring(6);

  useEffect(() => {
    dispatch(Core.doc.actions.fetchDocInfo(docId));
    dispatch(Core.doc.actions.fetchDoc(docId));
  }, [docId, dispatch]);

  return (
    <Component
      document={document}
      users={users}
      docInfo={docInfo}
      insertsInfo={insertsInfo}
      deletesInfo={deletesInfo}
      approveDocument={approveDocument}
      userId={userId}
      patchFile={patchFile}
    />
  );
};

const mapStateToProps = state => ({
  document: Core.doc.selectors.getDocument(state),
  userId: Core.user.selectors.getUserId(state),
  users: Core.doc.selectors.getDocUsers(state),
  docInfo: Core.doc.selectors.getDocInfo(state),
  insertsInfo: Core.doc.selectors.getInsertsInfo(state),
  deletesInfo: Core.doc.selectors.getDeletesInfo(state)
});

const mapDispatchToProps = dispatch => ({
  approveDocument: id => dispatch(Core.doc.actions.approveDoc(id)),
  patchFile: doc => dispatch(Core.doc.actions.patchFileInit(doc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
