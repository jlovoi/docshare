import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InsertPopover from "./insert-popover";

import { Bubble } from "../../../components";

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
    position: "fixed",
    height: "80vh",
    width: "73%",
    left: "25%",
    paddingTop: "2.5%"
  }
}));

const showLines = (lines, inserts, classes) =>
  lines.map((line, index) => {
    if (inserts[line]) {
      return (
        <div className={classes.line} key={`line-${index}`}>
          <div className={classes.flex}>
            {inserts[line].map((ins, i) => {
              if (ins.author && ins.author.length) {
                return <InsertPopover key={`pop-${index}-${i}`} insert={ins} />;
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
    return (
      <div className={classes.line} key={`inline-${index}`}>
        <div className={classes.margin}>{line}</div>
      </div>
    );
  });

const DocInfo = ({ docInfo, insertsInfo }) => {
  const classes = useStyles();

  const { lines } = docInfo;

  return (
    <div className={classes.workflow}>
      {showLines(lines, insertsInfo, classes)}
    </div>
  );
};

export default DocInfo;
