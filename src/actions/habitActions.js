import {
  CREATE_NEW_HABIT,
  GET_EXISTING_HABITS,
  DELETE_HABIT,
  DELETE_ALL_HABITS_FROM_GROUP
} from "../constants/actionTypes.js";
import { addHabitIdToGroup } from "./groupActions.js";

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

export const deleteAllHabitsFromGroup = groupId => {
  return {
    type: DELETE_ALL_HABITS_FROM_GROUP,
    payload: groupId
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
    //setHabits(data);

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
          dispatch(addHabitIdToGroup(data.habit._id, data.habit.collectionId));
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
        dispatch(deleteHabit(deletedHabitId));
      });
  };
};
