import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  //pulls all states with useSelector
  const counter = useSelector(state => state.counter);
  //dispatches actions
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <h1 className="main-heading">Here you come!</h1>
        <h2 className="secondary-heading">
          Your MERN application is successfully generated.
        </h2>
      </header>
      <p className="paragraph">HELLO WORLD</p>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
