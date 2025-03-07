import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import LahariHabits from "../../constants/LahariHabits.json";
import SimoneHabits from "../../constants/SimoneHabits.json";
import ArtLahari from "../../constants/ArtLahari.json";
import ArtSimone from "../../constants/ArtSimone.json";
import EducationLahari from "../../constants/EducationLahari.json";
import EducationSimone from "../../constants/EducationSimone.json";

import IndividualHabit from "../IndividualHabit";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: 0
  }
});

const FriendDropDown = ({groupName}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
        <h6>Lahari's Habits</h6>
        </ExpansionPanelSummary>

        {groupName === "Education" && (
          <div className="friend-dropdown-habits">
            {EducationLahari.lahariHabitsEducation.map((habit, index) => {
              return (
                <IndividualHabit
                  key={index}
                  habitName={habit.habitName}
                  progress={habit.progress}
                />
              );
            })}
          </div>
        )}

        {groupName === "Art" && (
          <div className="friend-dropdown-habits">
            {ArtLahari.lahariHabitsArt.map((habit, index) => {
              return (
                <IndividualHabit
                  key={index}
                  habitName={habit.habitName}
                  progress={habit.progress}
                />
              );
            })}
          </div>
        )}

      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
        <h6>Simone's Habits</h6>
        </ExpansionPanelSummary>
        {groupName === "Education" && (
          <div className="friend-dropdown-habits">
            {EducationSimone.simoneHabitsEducation.map((habit, index) => {
              return (
                <IndividualHabit
                  key={index}
                  habitName={habit.habitName}
                  progress={habit.progress}
                />
              );
            })}
          </div>
        )}

        {groupName === "Art" && (
          <div className="friend-dropdown-habits">
            {ArtSimone.simoneHabitsArt.map((habit, index) => {
              return (
                <IndividualHabit
                  key={index}
                  habitName={habit.habitName}
                  progress={habit.progress}
                />
              );
            })}
          </div>
        )}
      </ExpansionPanel>
    </div>
  );
};

export default FriendDropDown;
