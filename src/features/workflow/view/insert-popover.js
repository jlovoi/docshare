import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles(theme => ({
  insertText: {
    color: "green",
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

const handleClick = setAnchorEl => e => setAnchorEl(e.currentTarget);

const handleClose = setAnchorEl => () => setAnchorEl(null);

const InsertPopover = ({ insert }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <div className={classes.insertText} onClick={handleClick(setAnchorEl)}>
        {` ${insert.content}`}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose(setAnchorEl)}
        className={classes.popover}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className={classes.popoverContent}>
          {`Inserted by ${insert.author[0]}`} <br />
          {`on ${new Date(insert.date[0]).toDateString()}`}
        </div>
      </Popover>
    </div>
  );
};

export default InsertPopover;
