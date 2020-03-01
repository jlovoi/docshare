import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Component from "../view";

import Core from "../../../web-core";

const Container = ({ users = [], docInfo = {}, insertsInfo = {} }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const docId = location.pathname.substring(6);

  useEffect(() => {
    dispatch(Core.doc.actions.fetchDocInfo(docId));
    dispatch(Core.doc.actions.fetchDoc(docId));
  }, [docId, dispatch]);

  return (
    <Component users={users} docInfo={docInfo} insertsInfo={insertsInfo} />
  );
};

const mapStateToProps = state => ({
  users: Core.doc.selectors.getDocUsers(state),
  docInfo: Core.doc.selectors.getDocInfo(state),
  insertsInfo: Core.doc.selectors.getInsertsInfo(state)
});

export default connect(mapStateToProps)(Container);
