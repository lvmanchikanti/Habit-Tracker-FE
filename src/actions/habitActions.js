import {
  CREATE_NEW_HABIT,
  GET_EXISTING_HABITS
} from "../constants/actionTypes.js";

export const createNewHabit = newHabit => {
  // TODO add axios call to POST a new habit
  return {
    type: CREATE_NEW_HABIT,
    payload: newHabit
  };
};

export const getExistingHabits = () => {
  return {
    type: GET_EXISTING_HABITS
  };
};
