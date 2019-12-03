import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import FriendDropdown from "../FriendDropdown";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IndividualHabit from "../IndividualHabit";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  expansion: {
    width: 400,
    marginBottom: 5
  },
  deleteButton: {
    marginTop: 20
  }
}));

const TabPanel = props => {
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
};

const GroupContainer = ({
  existingGroups,
  deleteHabitAPI,
  deleteHabitFromGroup,
  deleteGroup,
  getAllHabitsInGroup,
  deleteAllHabitsFromGroup
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
        {existingGroups.map((group, index) => {
          return <Tab key={index} label={group.name} />;
        })}
      </Tabs>
      {existingGroups.map((group, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            <div className={classes.expansion}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-label="Expand"
                  aria-controls="additional-actions1-content"
                  id="additional-actions1-header"
                  onClick={() => getAllHabitsInGroup(group.habitIds, group._id)}
                >
                  <h6>Your Habits</h6>
                </ExpansionPanelSummary>
                <div className="friend-dropdown-habits">
                  <div>
                    {group.habitObjects &&
                      group.habitObjects.map((habit, index) => {
                        if (habit.habitName != null) {
                          return (
                            <IndividualHabit
                              key={index}
                              habitName={habit.habitName}
                              progress={0}
                              deleteHabit={() => {
                                deleteHabitAPI(habit._id);
                                deleteHabitFromGroup(
                                  habit._id,
                                  habit.collectionId
                                );
                              }}
                            />
                          );
                        }
                      })}
                  </div>
                </div>
              </ExpansionPanel>
            </div>
            <FriendDropdown 
              groupName={group.name}
            />
            <Button
              color="secondary"
              onClick={() => {
                deleteGroup(group._id);
                deleteAllHabitsFromGroup(group.habitIds);
                setValue(0);
              }}
              className={classes.deleteButton}
            >
              Delete Group
            </Button>
          </TabPanel>
        );
      })}
    </div>
  );
};

export default GroupContainer;
