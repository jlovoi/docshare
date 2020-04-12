import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { Avatar, UploadModal } from "../../../components";
import DocInfo from "./doc-info";

import Download from "@material-ui/icons/GetApp";

const useStyles = makeStyles(() => ({
  approve: {
    width: "100%",
    position: "absolute",
    bottom: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  approveButton: {
    backgroundColor: "darkseagreen",
    margin: "5px"
  },
  downloadButton: {
    backgroundColor: "darkgrey",
    margin: "5px"
  },
  uploadButton: {
    backgroundColor: "lightsteelblue",
    margin: "5px"
  },
  box: {
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    width: "15%",
    margin: "2.5%",
    padding: "2.5%",
    paddingBottom: "5.5%"
  },
  group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  progress: {
    position: "relative",
    top: "40%"
  },
  workflowRoot: {
    overflowY: "auto",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    height: "86vh"
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
  users,
  docInfo,
  insertsInfo,
  deletesInfo,
  userId,
  patchFile
}) => {
  const classes = useStyles();

  const [files, setFiles] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const currentStage =
    document.users &&
    document.users.findIndex(user => {
      return document.latestApproval && document.latestApproval === user._id;
    });

  const isApproving =
    currentStage >= 0 && userId === document.users[currentStage + 1]._id;

  return (
    <div>
      <div className={classes.workflowRoot}>
        <Box className={classes.box}>
          <div className={classes.group}>
            {users.map(
              (user, index) =>
                user && (
                  <Avatar
                    key={user._id}
                    // avatar={avatars[index]}
                    check={index <= currentStage}
                    fillLine={index <= currentStage + 1}
                    first={index === 0}
                    fullName={user.firstName + " " + user.lastName}
                    title={user.title}
                  />
                )
            )}
          </div>
        </Box>
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
