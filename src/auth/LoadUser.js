import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Core from "../web-core";

export default ({ confirmation, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Core.auth.actions.setConfirmation(confirmation));
  }, [confirmation, dispatch]);

  return <div>{children}</div>;
};
