import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useDropzone } from "react-dropzone";

import CancelIcon from "@material-ui/icons/Cancel";
import FileIcon from "@material-ui/icons/Description";

import { Step } from "../../components";

const useStyles = makeStyles(theme => ({
  modal: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    backgroundColor: "rgba(46, 49, 49, .7)",
    top: 0,
    left: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const dropzone = (getRootProps, getInputProps, isDragActive) => (
  <div
    style={{
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
    {...getRootProps()}
  >
    <input {...getInputProps()} />
    {isDragActive ? (
      <p>Drop the files here ...</p>
    ) : (
      <p>Drag-n-drop a file here, or click to select a file</p>
    )}
  </div>
);

const showFiles = (files, onCancel, classes) => {
  return (
    <div className={classes.files}>
      {files.map(f => (
        <div className={classes.fileContainer} key={`div-${f.name}`}>
          <div className={classes.flex}>
            <FileIcon className={classes.file} key={f.name} />
            <CancelIcon
              className={classes.cancel}
              onClick={() => onCancel(f.name)}
              key={`cancel-${f.name}`}
            />
          </div>
          <div className={classes.fileName}>{f.name}</div>
        </div>
      ))}
    </div>
  );
};

const onSubmit = (
  droppedFiles,
  docName,
  userId,
  selectedUsers,
  submitDoc
) => () => {
  droppedFiles.forEach(file => {
    const reader = new FileReader();

    reader.onabort = (r, e) => console.error("Reader aborted!", e);
    reader.onerror = (r, e) => console.error("Reader error!", e);
    reader.onload = (r, e) => {
      const doc = {
        name: docName,
        users: selectedUsers,
        latestApproval: null,
        createdBy: userId,
        content: reader.result
      };
      submitDoc(doc);
    };
    reader.readAsArrayBuffer(file);
  });
};

export default ({ files, setFiles, submitDoc, onCancel, onClose }) => {
  const classes = useStyles();

  const onDrop = droppedFiles => {
    setFiles(droppedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const notDocx =
    files &&
    !files.every(
      f =>
        f.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
  const disabled = !files || files.length > 1 || notDocx;

  return (
    <div className={classes.modal}>
      <div style={{ minWidth: "500px" }}>
        <Step
          step={2}
          description="Upload a file"
          content={
            files
              ? showFiles(files, onCancel, classes)
              : dropzone(getRootProps, getInputProps, isDragActive)
          }
          error={notDocx && "Only .docx files are supported!"}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
