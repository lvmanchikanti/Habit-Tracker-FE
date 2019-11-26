import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const GroupContainer = ({
  existingGroups,
  deleteHabit,
  deleteHabitFromGroup,
  getAllHabitsInGroup
}) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {existingGroups.map(group => {
          return <Tab label={group.name} />;
        })}
      </Tabs>
      {existingGroups.map((group, index) => {
        return (
          <TabPanel value={value} index={index}>
            {group.habitIds.map(habitId => {
              return (
                <div key={habitId}>
                  <p>{habitId}</p>
                  <Button
                    onClick={() => {
                      deleteHabit(habitId);
                      deleteHabitFromGroup(habitId, group._id);
                    }}
                  >
                    Delete Habit
                  </Button>
                </div>
              );
            })}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default GroupContainer;

/*
{
  existingGroups.map(group => {
    return (
      <div className="group-container" key={group._id}>
        <h1>{group.name}</h1>
        <h4>habit ids</h4>
        {group.habitIds.map(habitId => {
          return (
            <div key={habitId}>
              <p>{habitId}</p>
              <Button
                onClick={() => {
                  deleteHabitAPI(habitId);
                  deleteHabitFromGroup(habitId, group._id);
                }}
              >
                Delete Habit
              </Button>
            </div>
          );
        })}

        <h4>user ids</h4>
        {group.userIds.map(userId => {
          return <p key={userId}>{userId}</p>;
        })}
      </div>
    );
  });
}
*/
