import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import { Avatar } from "../../../components";

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
  }
}));

const ApprovalOrder = ({ users, currentStage }) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.group}>
        {users.map((user, index) => {
          if (user) {
            const firstName = user.firstName;
            const lastName = user.lastName;
            const displayName =
              firstName && lastName ? firstName + " " + lastName : user.email;
            return (
              <Avatar
                key={user._id}
                // avatar={avatars[index]}
                check={index <= currentStage}
                fillLine={index <= currentStage + 1}
                first={index === 0}
                fullName={displayName}
                title={user.title}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </Box>
  );
};

export default ApprovalOrder;
