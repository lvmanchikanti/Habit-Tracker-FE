import {
  CREATE_NEW_HABIT,
  GET_EXISTING_HABITS
} from "../constants/actionTypes.js";

const habitsURL = "http://localhost:8000/habits/";

/*
REDUX ACTION
*/

export const createNewHabit = newHabit => {
  // TODO add axios call to POST a new habit
  return {
    type: CREATE_NEW_HABIT,
    payload: newHabit
  };
};

export const getExistingHabits = existingHabits => {
  return {
    type: GET_EXISTING_HABITS,
    payload: existingHabits
  };
};

/*
API CALLS
*/
export const fetchExistingHabits = () => {
  return async dispatch => {
    let response = await fetch(habitsURL);
    let data = await response.json();

    console.log(data);

    dispatch(getExistingHabits(data));
  };
};

export const postNewHabit = newHabit => {
  return dispatch => {
    fetch(habitsURL + "create", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newHabit)
    })
      .then(response => response.json())
      .then(data => {
        if (data.name !== "MongoError") {
          dispatch(createNewHabit(data));
        }
      });
  };
};
