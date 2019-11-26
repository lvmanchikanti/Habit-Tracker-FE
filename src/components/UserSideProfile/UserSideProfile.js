import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 100,
    height: 100,
    margin: 10
  },
  smallAvatar: {
    width: 30,
    height: 30,
    margin: 5,
    fontSize: 12
  }
}));
const UserSideProfile = () => {
  const classes = useStyles();

  return (
    <Card className="user-side-profile-container">
      <CardHeader action={<Button>Edit</Button>} />
      <CardContent className="user-side-profile-content">
        <Avatar className={classes.bigAvatar}>CM</Avatar>
        <h3>Cynthia Mo</h3>
        <h6>Number of Habits</h6>
        <h6>128</h6>
        <h6>Longest Streak</h6>
        <h6>43</h6>
        <h6>Friends</h6>
        <div className="user-side-profile-friends">
          <Avatar className={classes.smallAvatar}>LM</Avatar>
          <Avatar className={classes.smallAvatar}>SM</Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserSideProfile;
