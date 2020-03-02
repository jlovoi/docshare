import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

const useStyles = type =>
  makeStyles(theme => ({
    text: {
      color: type === "delete" ? "red" : "green",
      fontWeight: "bold",
      textDecoration: "underline"
    },
    popover: {
      //
    },
    popoverContent: {
      padding: "12px"
    }
  }));

const getLabel = type => {
  switch (type) {
    case "delete":
      return "Deleted";
    case "insert":
      return "Inserted";
    default:
      return "Created";
  }
};

const handleClick = setAnchorEl => e => setAnchorEl(e.currentTarget);

const handleClose = setAnchorEl => () => setAnchorEl(null);

const ContentPopover = ({ content, type }) => {
  const classes = useStyles(type)();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const label = getLabel(type);

  return (
    <div>
      <div className={classes.text} onClick={handleClick(setAnchorEl)}>
        {` ${content.content}`}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose(setAnchorEl)}
        className={classes.popover}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className={classes.popoverContent}>
          {`${label} by ${content.author[0]}`} <br />
          {`on ${new Date(content.date[0]).toDateString()}`}
        </div>
      </Popover>
    </div>
  );
};

export default ContentPopover;
