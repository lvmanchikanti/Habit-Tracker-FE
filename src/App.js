import React, { useEffect } from "react";
import "./App.css";

// Import Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import Redux Actions
import * as CounterActions from "./actions/counterActions";
import * as GroupActions from "./actions/groupActions.js";

// Import Components
import CreateHabit from "./components/CreateHabit";

const App = props => {
  useEffect(() => {
    groupActions.getExistingGroups();
  }, []);

  const { counterActions, groupActions } = props;

  return (
    <div>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <CreateHabit existingGroups={props.existingGroups} />

      <h1>Counter {props.counter}</h1>
      <button onClick={() => counterActions.increment()}>+</button>
      <button onClick={() => counterActions.decrement()}>-</button>
      <button onClick={() => groupActions.getExistingGroups()}>
        get groups
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    existingGroups: state.group,
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    groupActions: bindActionCreators(GroupActions, dispatch),
    counterActions: bindActionCreators(CounterActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
