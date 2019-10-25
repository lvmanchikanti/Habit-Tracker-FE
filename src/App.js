import React, { useEffect } from "react";
import "./App.css";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import Redux Actions
import * as CounterActions from "./actions/counterActions.js";
import * as GroupActions from "./actions/groupActions.js";
import * as HabitActions from "./actions/habitActions.js";

// Import Components
import CreateHabit from "./components/CreateHabit";
import GroupContainer from "./components/GroupContainer";

const App = props => {
  const { fetchGroups } = props.groupActions;
  const { fetchExistingHabits } = props.habitActions;

  //TODO: add use state and put state in dependency array so page rerenders after state change
  // useEffect(() => {
  //   props.groupActions.fetchGroups(props.existingGroups);
  //   props.habitActions.fetchExistingHabits(props.habits);
  // }, [props.groupActions, props.habitActions]);
  useEffect(() => {
    fetchGroups();
    fetchExistingHabits();
  }, [fetchGroups, fetchExistingHabits]);

  const { groupActions, habitActions } = props;
  return (
    <div>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <CreateHabit
        existingGroups={props.existingGroups}
        postNewHabit={habitActions.postNewHabit}
        postNewGroup={groupActions.postNewGroup}
      />
      <h1>Habits Created</h1>
      {props.habits.map(habit => {
        // TODO - add habit id as key in div
        return (
          <div key={habit._id}>
            <h3>{habit.habitName}</h3>
            <h3>{habit.habitGroup ? habit.habitGroup : ""}</h3>
          </div>
        );
      })}

      <GroupContainer
        existingGroups={props.existingGroups}
        deleteHabitById={habitActions.deleteHabitById}
        deleteHabitFromGroup={groupActions.deleteHabitFromGroupAPI}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    existingGroups: state.groups,
    counter: state.counter,
    habits: state.habits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    groupActions: bindActionCreators(GroupActions, dispatch),
    counterActions: bindActionCreators(CounterActions, dispatch),
    habitActions: bindActionCreators(HabitActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
