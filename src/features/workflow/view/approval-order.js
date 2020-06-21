import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Avatar } from "../../../components";

const useStyles = makeStyles(() => ({
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginLeft: "auto"
  }
}));

const ApprovalOrder = ({ users, currentStage }) => {
  const classes = useStyles();

  return (
    <div className={classes.group}>
      {users.map((user, index) => {
        if (user) {
          const firstName = user.firstName;
          const lastName = user.lastName;
          const displayName =
            firstName && lastName ? firstName + " " + lastName : user.email;
          const letters =
            firstName && lastName
              ? firstName[0] + lastName[0]
              : user.email[0] + user.email[1];
          return (
            <Avatar
              key={index}
              // avatar={avatars[index]}
              children={letters || null}
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
  );
};

export default ApprovalOrder;
