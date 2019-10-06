import React, { useEffect } from "react";
import "./App.css";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import Redux Actions
import * as CounterActions from "./actions/counterActions";
import * as GroupActions from "./actions/groupActions.js";
import * as HabitActions from "./actions/habitActions.js";

// Import Components
import CreateHabit from "./components/CreateHabit";

const App = props => {
  useEffect(() => {
    props.groupActions.fetchGroups();
    props.habitActions.getExistingHabits();
  }, [props.groupActions, props.habitActions]);

  const { groupActions, habitActions } = props;
  return (
    <div>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <CreateHabit
        existingGroups={props.existingGroups}
        createNewHabit={habitActions.createNewHabit}
        createNewGroup={groupActions.createGroup}
      />
      <h1>Habits Created</h1>
      {props.habits.map(habit => {
        // TODO - add habit id as key in div
        return (
          <div>
            <h3>{habit.habitName}</h3>
            <h3>{habit.habitGroup}</h3>
          </div>
        );
      })}
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
