import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#d7d7d7",
    width: "60%",
    padding: "16px",
    margin: "24px",
    borderRadius: "8px",
    maxHeight: "400px"
  },
  doc: {
    marginTop: "18px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px"
  },
  download: {
    backgroundColor: "#11c178",
    color: "#ffffff"
  }
}));

export default ({ userDocs }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        Your Documents
        {userDocs.map(doc => (
          <div key={doc._id} className={classes.doc}>
            {doc.name}
            <Button
              className={classes.download}
              onClick={() =>
                window.open(`http://localhost:3000/docs/${doc._id}/download`)
              }
            >
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
