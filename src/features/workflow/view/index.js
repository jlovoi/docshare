import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { Avatar } from "../../../components";
import DocInfo from "./doc-info";

import avatar from "../../../components/user/avatar.jpg";
import brett from "../../../components/user/brett.jpg";
import ray from "../../../components/user/ray.jpg";

const useStyles = makeStyles(() => ({
  approve: {
    width: "100%",
    position: "absolute",
    bottom: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  approveButton: {
    backgroundColor: "darkseagreen"
  },
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
  workflowRoot: {
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
  2: ray
};

const Workflow = ({
  approveDocument,
  document,
  users,
  docInfo,
  insertsInfo,
  deletesInfo,
  userId
}) => {
  const classes = useStyles();

  const currentStage =
    document.users &&
    document.users.findIndex(user => {
      return document.latestApproval && document.latestApproval === user._id;
    });
  const isApproving =
    currentStage && userId === document.users[currentStage + 1]._id;

  return (
    <div>
      <div className={classes.workflowRoot}>
        <Box className={classes.box}>
          <div className={classes.group}>
            {users.map(
              (user, index) =>
                user && (
                  <Avatar
                    key={user._id}
                    // avatar={avatars[index]}
                    check={index <= currentStage}
                    first={index === 0}
                    fullName={user.firstName + " " + user.lastName}
                    title={user.title}
                  />
                )
            )}
          </div>
        </Box>
        <DocInfo
          docInfo={docInfo}
          insertsInfo={insertsInfo}
          deletesInfo={deletesInfo}
        />
      </div>
      <div className={classes.approve}>
        <Button
          disabled={!isApproving}
          className={classes.approveButton}
          onClick={() => approveDocument(document._id)}
        >
          Approve
        </Button>
      </div>
    </div>
  );
};

export default Workflow;
