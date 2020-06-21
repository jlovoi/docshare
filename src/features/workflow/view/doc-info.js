import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Popover from "./content-popover";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  line: {
    marginBottom: "4px"
  },
  margin: {
    marginLeft: "3px"
  },
  workflow: {
    height: "80vh",
    width: "70vw",
    left: "25%",
    paddingTop: "2.5%"
  }
}));

const showLines = (lines, inserts, deletes, classes) =>
  lines.map((line, index) => {
    if (inserts[line]) {
      return (
        <div className={classes.line} key={`line-${index}`}>
          <div className={classes.flex}>
            {inserts[line].map((ins, i) => {
              if (ins.author && ins.author.length) {
                return (
                  <Popover
                    key={`pop-${index}-${i}`}
                    content={ins}
                    type="insert"
                  />
                );
              }
              return (
                <div className={classes.margin} key={`ins-${index}-${i}`}>
                  {ins.content}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (deletes[line]) {
      return (
        <div className={classes.line} key={`line-${index}`}>
          <div className={classes.flex}>
            {deletes[line].map((del, i) => {
              if (del.author && del.author.length) {
                return (
                  <Popover
                    key={`pop-${index}-${i}`}
                    content={del}
                    type="delete"
                  />
                );
              }
              return (
                <div className={classes.margin} key={`ins-${index}-${i}`}>
                  {del.content}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div className={classes.line} key={`inline-${index}`}>
        <div className={classes.margin}>{line}</div>
      </div>
    );
  });

const DocInfo = ({ docInfo, insertsInfo, deletesInfo }) => {
  const classes = useStyles();

  const lines = docInfo.lines || [];

  return (
    <div className={classes.workflow}>
      {showLines(lines, insertsInfo, deletesInfo, classes)}
    </div>
  );
};

export default DocInfo;
