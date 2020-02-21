import React from "react";
import Button from "@material-ui/core/Button";

export default ({ downloadFile }) => {
  return (
    <Button
      onClick={() =>
        window.open(
          "http://localhost:3000/docs/5e5009f7573ef8fe66f4ed67/download"
        )
      }
    >
      Download
    </Button>
  );
};
