import {
  GET_EXISTING_GROUPS,
  CREATE_NEW_GROUP,
  DELETE_HABIT_FROM_GROUP
} from "../constants/actionTypes.js";

const collectionsURL = "http://localhost:8000/collections/";

/*
REDUX ACTION
*/

export const getExistingGroups = existingGroups => {
  return {
    type: GET_EXISTING_GROUPS,
    payload: existingGroups
  };
};

export const createNewGroup = newGroup => {
  return {
    type: CREATE_NEW_GROUP,
    payload: newGroup
  };
};

export const deleteHabitFromGroup = (habitId, groupId) => {
  return {
    type: DELETE_HABIT_FROM_GROUP,
    payload: { habitId, groupId }
  };
};
/*
API CALLS
*/

// NOTE: May not need now that we fetch in App.js

export const getExistingGroupsAPI = () => {
  return async dispatch => {
    let response = await fetch(collectionsURL);
    let data = await response.json();
    //console.log(data);

    dispatch(getExistingGroups(data));
    // fetch(collectionsURL)
    //   .then(response => response.json())
    //   .then(data => {
    //     dispatch(getExistingGroups(data));
    //   });
  };
};

export const createNewGroupAPI = newGroup => {
  return dispatch => {
    fetch(collectionsURL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newGroup)
    })
      .then(response => response.json())
      .then(data => {
        if (data.name !== "MongoError") {
          dispatch(createNewGroup(data));
        }
      });
  };
};

export const deleteHabitFromGroupAPI = (habitId, groupId) => {
  console.log("check: ", habitId, " ", groupId);

  //ES6 object initializer using variable names
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  let deletedHabitAndGroup = { habitId, groupId };

  return dispatch => {
    fetch(collectionsURL + "deleteHabit", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify(deletedHabitAndGroup)
    })
      .then(response => response.json())
      .then(groupIdDelete => {
        console.log(
          "successfully deleted habit is: ",
          habitId,
          " from group ",
          groupIdDelete
        );
        dispatch(deleteHabitFromGroup(habitId, groupIdDelete));
      });
  };
};
