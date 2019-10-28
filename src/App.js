import React, { useEffect, useState } from "react";
import "./App.css";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import Redux Actions
import * as GroupActions from "./actions/groupActions.js";
import * as HabitActions from "./actions/habitActions.js";

// Import Components
import CreateHabit from "./components/CreateHabit";
import GroupContainer from "./components/GroupContainer";

const App = props => {
  const { getExistingGroupsAPI } = props.groupActions;
  const { getExistingHabitsAPI } = props.habitActions;

  //TODO: add use state and put state in dependency array so page rerenders after state change
  // const [groups, setGroups] = useState(null);
  // const [habits, setHabits] = useState(null);

  useEffect(() => {
    getExistingGroupsAPI();
    getExistingHabitsAPI();
  }, [getExistingGroupsAPI, getExistingHabitsAPI]);

  const { groupActions, habitActions } = props;

  return (
    <div>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <CreateHabit
        existingGroups={props.existingGroups}
        createNewHabitAPI={habitActions.createNewHabitAPI}
        createNewGroupAPI={groupActions.createNewGroupAPI}
      />
      <h1>Habits Created</h1>
      {props.habits.map(habit => {
        return (
          <div key={habit._id}>
            <h3>{habit.habitName}</h3>
            <h3>{habit.habitGroup ? habit.habitGroup : ""}</h3>
          </div>
        );
      })}

      <GroupContainer
        existingGroups={props.existingGroups}
        deleteHabitAPI={habitActions.deleteHabitAPI}
        deleteHabitFromGroup={groupActions.deleteHabitFromGroupAPI}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    existingGroups: state.groups,
    habits: state.habits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    groupActions: bindActionCreators(GroupActions, dispatch),
    habitActions: bindActionCreators(HabitActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
