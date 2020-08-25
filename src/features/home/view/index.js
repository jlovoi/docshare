import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { API_URL } from "../../../version";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "center"
  },
  documentContent: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    padding: "16px"
  },
  doc: {
    marginTop: "18px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    borderTop: "1px solid #a9a9a9",
    paddingTop: "20px"
  },
  download: {
    backgroundColor: theme.palette.skobeloff,
    color: "#ffffff"
  },
  header: {
    fontSize: "32px"
  },
  text: {
    margin: "24px",
    alignText: "center"
  }
}));

export default ({ userDocs }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.documentContent}>
        <div className={classes.header}>Your Documents</div>
        {userDocs.map(doc => (
          <div key={doc._id} className={classes.doc}>
            <div style={{ flex: 3 }}>{doc.name}</div>
            <div style={{ flex: 3 }}>
              <Button
                className={classes.download}
                onClick={() => history.push(`docs/${doc._id}`)}
              >
                View Document
              </Button>
            </div>
            <div style={{ flex: 1 }}>
              <Button
                className={classes.download}
                onClick={() =>
                  window.open(`${API_URL}/docs/${doc._id}/download`)
                }
              >
                Download
              </Button>
            </div>
          </div>
        ))}
        <div className={classes.text}>
          {!userDocs.length &&
            "It seems you're not an approver of any documents... Go create one!"}
        </div>
      </div>
    </div>
  );
};
