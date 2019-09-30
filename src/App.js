import React, { useEffect, useState } from "react";
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
  const [groupState, setExistingGroups] = useState(props.existingGroups);
  useEffect(() => {
    setExistingGroups(groupActions.getExistingGroups());
    console.log(groupState);
  }, []);

  const { counterActions, groupActions, habitActions } = props;
  console.log(props);
  console.log(groupState);
  return (
    <div>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <CreateHabit
        existingGroups={props.existingGroups}
        createNewHabit={habitActions.createNewHabit}
      />

      <h1>Counter {props.counter}</h1>
      <button onClick={() => counterActions.increment()}>+</button>
      <button onClick={() => counterActions.decrement()}>-</button>

      <h1>Habits Created</h1>
      {props.habits.map(habit => {
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
