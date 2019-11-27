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
  deleteHabitAPI,
  deleteHabitFromGroup,
  deleteGroup,
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
          return (
            <Tab
              label={group.name}
              onClick={() => getAllHabitsInGroup(group.habitIds, group._id)}
            />
          );
        })}
      </Tabs>
      {existingGroups.map((group, index) => {
        return (
          <TabPanel value={value} index={index}>
            <Button
              color="secondary"
              onClick={() => getAllHabitsInGroup(group.habitIds, group._id)}
            >
              show habits
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                deleteGroup(group._id);
              }}
            >
              Delete Group
            </Button>
            {group.habitObjects && (
              <div>
                {group.habitObjects.map(habit => {
                  if (habit.habitName != null) {
                    return (
                      <div>
                        <h1>{habit.habitName}</h1>
                        <Button
                          onClick={() => {
                            deleteHabitAPI(habit._id);
                            deleteHabitFromGroup(habit._id, habit.collectionId);
                          }}
                        >
                          Delete Habit
                        </Button>
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default GroupContainer;
