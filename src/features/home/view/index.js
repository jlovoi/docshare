import React from "react";
import Button from "@material-ui/core/Button";

export default ({ downloadFile }) => {
  return (
    <Button onClick={() => downloadFile("5e4ec40f95ebc5e67cebdb5d")}>
      Download
    </Button>
  );
};
