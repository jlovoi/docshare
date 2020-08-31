import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDropzone } from "react-dropzone";

import {
  onCancel,
  showFiles,
  nameDocument,
  dropzone,
  onSubmit,
  makeSetter
} from "./utils";
import { Step } from "../../../components";
import Approver from "./approver";

const useStyles = makeStyles(theme => ({
  arrow: {
    alignSelf: "center",
    margin: "8px"
  },
  addButton: {
    height: "40px",
    width: "200px",
    fontSize: "14px",
    backgroundColor: "#dfdfdf",
    textTransform: "none",
    margin: "12px",
    alignSelf: "self-start"
  },
  button: {
    height: "40px",
    width: "100px",
    fontSize: "18px",
    backgroundColor: "#8ae38c",
    textTransform: "none",
    margin: "32px"
  },
  navButton: {
    height: "40px",
    width: "100px",
    fontSize: "18px",
    backgroundColor: "#008cff",
    textTransform: "none",
    margin: "32px"
  },
  header: {
    fontSize: "32px",
    alignSelf: "flex-start",
    position: "relative",
    right: "16px",
    top: "32px",
    fontWeight: "bold"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row"
  },
  cancel: {
    fontSize: "16px"
  },
  dropZone: {
    height: "50px"
  },
  file: {
    fontSize: "64px"
  },
  files: {
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  fileContainer: {
    display: "flex",
    flexDirection: "column",
    width: "64px",
    margin: "20px"
  },
  fileName: {
    fontSize: "10px",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center"
  },
  flex: {
    display: "flex"
  },
  input: {
    width: "100%",
    textAlignLast: "center"
  },
  step1: {
    width: "30%",
    alignSelf: "flex-start"
  },
  uploadRoot: {
    height: "100%",
    width: "100%",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default ({ user, submitDoc, userId }) => {
  const classes = useStyles();

  const [next, setNext] = useState(false);
  const [docName, setDocName] = useState("");
  const [files, setFiles] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([
    { name: "", email: "", type: "approver" }
  ]);
  const [approverType, setApproverType] = useState("approver");

  const hasDuplicate = selectedUsers
    .map(u => u.email)
    .some(
      (email, index, arr) =>
        arr.indexOf(email) !== index || email === user.email
    );

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
  const disabled =
    !files ||
    files.length > 1 ||
    notDocx ||
    !selectedUsers.length ||
    !docName ||
    hasDuplicate;

  return (
    <div className={classes.uploadRoot}>
      <div className={classes.header}>
        {next ? "Add and Order Approvers" : "New Document"}
      </div>
      {next ? (
        <div className={classes.uploadRoot}>
          <Approver
            {...user}
            name={user.firstName + " " + user.lastName}
            length={selectedUsers.length}
            setter={(_, val) => setApproverType(val)}
            type={approverType}
            required
          />
          {selectedUsers.map((selectedUser, index) => (
            <Approver
              key={`approver-${index}`}
              {...selectedUser}
              index={index}
              length={selectedUsers.length}
              setter={makeSetter(selectedUsers, setSelectedUsers, index)}
              onDelete={() =>
                setSelectedUsers(selectedUsers.filter((_, i) => i !== index))
              }
              move={(from, to) => {
                const newOrder = [...selectedUsers];
                newOrder.splice(to, 0, newOrder.splice(from, 1)[0]);
                setSelectedUsers(newOrder);
              }}
            />
          ))}
          <Button
            className={classes.addButton}
            onClick={() =>
              setSelectedUsers([
                ...selectedUsers,
                { name: "", email: "", type: "approver" }
              ])
            }
            disabled={selectedUsers.some(user => !user.name || !user.email)}
          >
            Add Recipient
          </Button>
        </div>
      ) : (
        <div className={classes.uploadRoot}>
          <div className={classes.step1}>
            <Step
              step={1}
              description="Name your new document"
              content={nameDocument(docName, setDocName, classes)}
            />
          </div>
          <Step
            step={2}
            description="Upload a file"
            content={
              files
                ? showFiles(files, onCancel(files, setFiles), classes)
                : dropzone(getRootProps, getInputProps, isDragActive)
            }
            error={notDocx && "Only .docx files are supported!"}
          />
        </div>
      )}
      <div className={classes.buttonGroup}>
        <Button className={classes.navButton} onClick={() => setNext(!next)}>
          {next ? "Back" : "Continue"}
        </Button>
        {next && (
          <Button
            className={classes.button}
            disabled={disabled}
            onClick={onSubmit(
              files,
              docName,
              userId,
              [user, ...selectedUsers],
              submitDoc
            )}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};
