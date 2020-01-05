import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import { Avatar, ExpandCard } from "../../../components";
import avatar from "../../../components/user/avatar.jpg";
import brett from "../../../components/user/brett.jpg";
import ray from "../../../components/user/ray.jpg";

const useStyles = makeStyles(() => ({
  header: {
    height: "32px",
    padding: "12px"
  },
  border: {
    borderBottom: "2px solid black"
  },
  box: {
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    height: "300px",
    width: "90%",
    margin: "2.5%",
    padding: "2.5%"
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "60px"
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative"
  },
  progress: {
    position: "relative",
    top: "40%"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: "14px"
  }
}));

const Workflow = ({ reviewer }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.border}>
        <div className={classes.title}>Review Status</div>
        <div className={classes.subTitle}>Awaiting Review from Frett Bene</div>
      </div>
      <Box className={classes.box}>
        <div className={classes.group}>
          <Avatar avatar={avatar} check={true} first={true} />
          <Avatar avatar={ray} check={true} fullName="Sugar Ray" />
          <Avatar avatar={brett} fullName="Frett Bene" />
        </div>
      </Box>
      <div className={classes.cards}>
        <ExpandCard />
        <ExpandCard />
        <ExpandCard />
      </div>
    </div>
  );
};

export default Workflow;
