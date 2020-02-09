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

const avatars = {
  0: avatar,
  1: brett,
  3: ray
};

const Workflow = ({ doc = {}, users = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.border}>
        <div className={classes.title}>Review Status</div>
        <div className={classes.subTitle}>Awaiting Review from Frett Bene</div>
      </div>
      <Box className={classes.box}>
        <div className={classes.group}>
          {users.map((user, index) => (
            <Avatar
              key={user._id}
              avatar={avatars[index]}
              check={index <= doc.stage}
              first={index === 0}
              fullName={user.firstName + " " + user.lastName}
            />
          ))}
        </div>
      </Box>
      <div className={classes.cards}></div>
    </div>
  );
};

export default Workflow;
