import {
  CREATE_NEW_HABIT,
  GET_EXISTING_HABITS,
  DELETE_HABIT,
  INCREMENT_HABITS
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

export const deleteHabit = deletedHabitId => {
  return {
    type: DELETE_HABIT,
    payload: deletedHabitId
  };
};

export const incrementHabits = () => {
  return {
    type: INCREMENT_HABITS
  };
};

/*
API CALLS
*/

// NOTE: May not need now that we fetch in App.js
export const getExistingHabitsAPI = setHabits => {
  return async dispatch => {
    let response = await fetch(habitsURL);
    let data = await response.json();

    //console.log(data);
    setHabits(data);

    dispatch(getExistingHabits(data));
  };
};

export const createNewHabitAPI = newHabit => {
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

export const deleteHabitAPI = habitId => {
  return dispatch => {
    fetch(habitsURL + "delete/" + habitId, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      params: JSON.stringify(habitId)
    })
      .then(response => response.json())
      .then(deletedHabitId => {
        console.log("successfully deleted habit is: ", deletedHabitId);
        dispatch(deleteHabit(deletedHabitId));
      });
  };
};
