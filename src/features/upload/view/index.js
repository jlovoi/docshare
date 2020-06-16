import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { useDropzone } from "react-dropzone";

// import ArrowIcon from "@material-ui/icons/ArrowForward";
import CancelIcon from "@material-ui/icons/Cancel";
import FileIcon from "@material-ui/icons/Description";
// import UserIcon from "@material-ui/icons/AccountCircle";

import { Step } from "../../../components";
import Approver from "./approver";

const useStyles = makeStyles(theme => ({
  arrow: {
    alignSelf: "center",
    margin: "8px"
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

const onCancel = (files, setFiles) => name => {
  if (files.length === 1) {
    setFiles(null);
  } else {
    setFiles(files.filter(f => f.name !== name));
  }
};

const nameDocument = (docName, setDocName, classes) => (
  <div className={classes.files}>
    <Input
      className={classes.input}
      value={docName}
      type="text"
      onChange={e => setDocName(e.target.value)}
    />
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

const dropzone = (getRootProps, getInputProps, isDragActive) => (
  <div
    style={{
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      border: "2px dashed black",
      margin: "0px 150px 0px 150px"
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

const makeSetter = (sampleUsers, setSampleUsers, index) => (key, val) => {
  const copy = [...sampleUsers];
  copy.splice(index, 1, { ...sampleUsers[index], [key]: val });
  setSampleUsers(copy);
};

export default ({ users, submitDoc, userId }) => {
  const classes = useStyles();

  const [next, setNext] = useState(false);
  const [docName, setDocName] = useState("");
  const [files, setFiles] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);

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
    !files || files.length > 1 || notDocx || !selectedUsers.length || !docName;

  const [sampleUsers, setSampleUsers] = useState([
    { name: "", email: "", type: "approver" }
  ]);

  return (
    <div className={classes.uploadRoot}>
      <div className={classes.header}>
        {next ? "Add and Order Approvers" : "New Document"}
      </div>
      {next ? (
        <div className={classes.uploadRoot}>
          {sampleUsers.map((user, index) => (
            <Approver
              {...user}
              setter={makeSetter(sampleUsers, setSampleUsers, index)}
            />
          ))}
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
            onClick={onSubmit(files, docName, userId, selectedUsers, submitDoc)}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

/* <Step
  step={3}
  description="Select and order users to share with"
  classes={classes}
  content={
    <CheckGroup
      group={group}
      onChange={setSelected(selectedUsers, setSelectedUsers)}
      checked={selectedUsers}
    />
  }
  subContent={userOrder(users, selectedUsers, classes)}
/>; */

// const userOrder = (users, selectedUsers, classes) => (
//   <div className={classes.files}>
//     {selectedUsers.map((userId, index) => (
//       <div key={`selected-${userId}`} className={classes.fileContainer}>
//         <div className={classes.flex}>
//           <UserIcon className={classes.file} />
//           {index !== selectedUsers.length - 1 && (
//             <ArrowIcon className={classes.arrow} />
//           )}
//         </div>
//         <div className={classes.fileName}>
//           {users.find(user => user._id === userId).username}
//         </div>
//       </div>
//     ))}
//   </div>
// );

// const group = users.map(user => ({
//   ...user,
//   value: user._id,
//   label: user.email
// }));

// const setSelected = (selectedUsers, setSelectedUsers) => e => {
//   if (selectedUsers.includes(e.target.value)) {
//     setSelectedUsers(selectedUsers.filter(user => user !== e.target.value));
//   } else {
//     setSelectedUsers([...selectedUsers, e.target.value]);
//   }
// };
