import { createSelector } from "reselect";

import { getDocInfo } from "./base-funcs";

export default createSelector(getDocInfo, docInfo => {
  const deletesInfo = {};
  docInfo &&
    docInfo.deletes &&
    docInfo.deletes.forEach(del => {
      deletesInfo[del.line] = del.deleted;
    });

  return deletesInfo;
});
