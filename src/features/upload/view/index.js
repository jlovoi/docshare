import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles(theme => ({
  description: {
    fontSize: "14px"
  },
  dropZone: {
    height: "50px"
  },
  stepBox: {
    marginTop: "24px",
    width: "60%",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#d7d7d7"
  },
  step: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  uploadRoot: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const Step = ({ step, description, content, classes }) => (
  <div className={classes.stepBox}>
    <div className={classes.step}>{`Step ${step}`}</div>
    <div className={classes.description}>{description}</div>
    {content}
  </div>
);

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
      <p>Drag 'n' drop some files here, or click to select files</p>
    )}
  </div>
);

const onDrop = droppedFiles => {
  console.log(droppedFiles);
};

const Upload = ({ users }) => {
  const classes = useStyles();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={classes.uploadRoot}>
      <Step
        step={1}
        description="Upload a file"
        classes={classes}
        content={dropzone(getRootProps, getInputProps, isDragActive)}
      />
    </div>
  );
};

export default Upload;
