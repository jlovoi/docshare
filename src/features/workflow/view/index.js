import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import ApprovalOrder from "./approval-order";
import { UploadModal } from "../../../components";
import DocInfo from "./doc-info";

import Download from "@material-ui/icons/GetApp";
import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

const useStyles = makeStyles(() => ({
  add: {
    color: "forestgreen",
    marginRight: "8px"
  },
  approve: {
    position: "sticky",
    bottom: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  approveButton: {
    backgroundColor: "darkseagreen",
    margin: "5px"
  },
  documentName: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  downloadButton: {
    backgroundColor: "darkgrey",
    margin: "5px"
  },
  uploadButton: {
    backgroundColor: "lightsteelblue",
    margin: "5px"
  },
  progress: {
    position: "relative",
    top: "40%"
  },
  remove: {
    color: "crimson",
    marginRight: "8px",
    marginLeft: "36px"
  },
  stats: {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  workflowRoot: {
    overflowY: "auto",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
    height: "80vh"
  }
}));

const onCancel = (files, setFiles) => name => {
  if (files.length === 1) {
    setFiles(null);
  } else {
    setFiles(files.filter(f => f.name !== name));
  }
};

const onPatchFile = (droppedFiles, id, patchFile) => () => {
  droppedFiles.forEach(file => {
    const reader = new FileReader();

    reader.onabort = (r, e) => console.error("Reader aborted!", e);
    reader.onerror = (r, e) => console.error("Reader error!", e);
    reader.onload = (r, e) => {
      const doc = {
        content: reader.result,
        id
      };
      patchFile(doc);
    };
    reader.readAsArrayBuffer(file);
  });
};

const Workflow = ({
  approveDocument,
  document,
  docInfo,
  insertsInfo,
  deletesInfo,
  userId,
  patchFile
}) => {
  const classes = useStyles();

  const [files, setFiles] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const users = document.users || [{ firstName: "", lastName: "", email: "" }];

  const currentStage = users.findIndex(user => {
    return document.latestApproval && document.latestApproval === user._id;
  });

  const isApproving =
    currentStage >= 0
      ? userId === users[currentStage + 1]._id
      : userId === users[0]._id;

  const documentName = document.name || "";

  const additions = Object.keys(insertsInfo).length;
  const removals = Object.keys(deletesInfo).length;

  return (
    <div>
      <div className={classes.workflowRoot}>
        <div className={classes.documentName}>{documentName}</div>
        <div className={classes.stats}>
          <AddCircle className={classes.add} style={{ fontSize: "200%" }} />
          {`${additions} Addition${additions === 1 ? "" : "s"}`}
          <RemoveCircle
            className={classes.remove}
            style={{ fontSize: "200%" }}
          />
          {`${removals} Removal${removals === 1 ? "" : "s"}`}
          <ApprovalOrder users={users} currentStage={currentStage} />
        </div>
        <DocInfo
          docInfo={docInfo}
          insertsInfo={insertsInfo}
          deletesInfo={deletesInfo}
        />
      </div>
      <div className={classes.approve}>
        <Button
          className={classes.uploadButton}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Upload New Version
        </Button>
        <Button
          disabled={!isApproving}
          className={classes.approveButton}
          onClick={() => approveDocument(document._id)}
        >
          Approve
        </Button>
        <Button
          className={classes.downloadButton}
          onClick={() =>
            window.open(
              `${process.env.REACT_APP_API}/docs/${document._id}/download`
            )
          }
        >
          <Download />
        </Button>
      </div>
      {openModal && (
        <UploadModal
          files={files}
          setFiles={setFiles}
          onCancel={onCancel(files, setFiles)}
          onClose={() => {
            setOpenModal(false);
            setFiles(null);
          }}
          onAccept={() => onPatchFile(files, document._id, patchFile)}
        />
      )}
    </div>
  );
};

export default Workflow;
