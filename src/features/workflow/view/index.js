import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import { Avatar } from "../../../components";
import Doc from "./doc-info";
import avatar from "../../../components/user/avatar.jpg";
import brett from "../../../components/user/brett.jpg";
import ray from "../../../components/user/ray.jpg";

const useStyles = makeStyles(() => ({
  box: {
    borderRadius: "8px",
    backgroundColor: "#d7d7d7",
    width: "15%",
    margin: "2.5%",
    padding: "2.5%",
    paddingBottom: "5.5%"
  },
  group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  progress: {
    position: "relative",
    top: "40%"
  },
  root: {
    overflowY: "auto",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    height: "86vh"
  }
}));

const avatars = {
  0: avatar,
  1: brett,
  3: ray
};

const Workflow = ({ doc = {}, users = [], docInfo = {} }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Box className={classes.box}>
          <div className={classes.group}>
            {users.map((user, index) => (
              <Avatar
                key={user._id}
                avatar={avatars[index]}
                check={index <= doc.stage}
                first={index === 0}
                fullName={user.firstName + " " + user.lastName}
                title={user.title}
              />
            ))}
          </div>
        </Box>
        <Doc docInfo={docInfo} />
      </div>
    </div>
  );
};

export default Workflow;
