import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  expandCard: {
    height: "100%",
    width: "200px",
    marginLeft: "20px",
    marginRight: "20px"
  },
  button: {
    width: "100%"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20px",
    padding: "0px !important"
  }
}));

const handleExpandClick = (expanded, setExpanded) => () => {
  setExpanded(!expanded);
};

const Component = (expanded, Component) => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={classes.expandCard}>
      <CardContent className={classes.header}>
        <Button
          className={classes.button}
          onClick={handleExpandClick(isExpanded, setIsExpanded)}
        >
          <KeyboardArrowDown />
        </Button>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>Component</CardContent>
      </Collapse>
    </Card>
  );
};

export default Component;
