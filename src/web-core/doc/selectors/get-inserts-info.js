import { createSelector } from "reselect";

import { getDocInfo } from "./base-funcs";

export default createSelector(getDocInfo, docInfo => {
  const insertsInfo = {};
  docInfo &&
    docInfo.inserts &&
    docInfo.inserts.forEach(ins => {
      insertsInfo[ins.line] = ins.inserted;
    });

  return insertsInfo;
});
