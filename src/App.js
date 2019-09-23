import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import CreateHabit from "./components/CreateHabit";

const App = () => {
  //pulls all states with useSelector
  const counter = useSelector(state => state.counter);
  //dispatches actions
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <CreateHabit />

      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
