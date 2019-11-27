import {
  GET_EXISTING_GROUPS,
  CREATE_NEW_GROUP,
  DELETE_HABIT_FROM_GROUP,
  DELETE_GROUP,
  ADD_HABITS_TO_GROUP
} from "../constants/actionTypes.js";

const collectionsURL = "http://localhost:8000/collections/";
const habitsURL = "http://localhost:8000/habits/";

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

// NOTE: never used in reducer
export const deleteHabitFromGroup = (habitId, groupId) => {
  return {
    type: DELETE_HABIT_FROM_GROUP,
    payload: { habitId, groupId }
  };
};

export const deleteGroup = groupId => {
  return {
    type: DELETE_GROUP,
    payload: groupId
  };
};

export const addHabitsToGroup = (habits, groupId) => {
  return {
    type: ADD_HABITS_TO_GROUP,
    payload: { habits, groupId }
  };
};
/*
API CALLS
*/

// NOTE: May not need now that we fetch in App.js

export const getExistingGroupsAPI = setGroups => {
  return async dispatch => {
    let response = await fetch(collectionsURL);
    let data = await response.json();
    //console.log(data);
    setGroups(data);
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

export const deleteGroupAPI = groupId => {
  console.log("checking group: ", groupId);

  let deletedGroup = { groupId };

  return dispatch => {
    fetch(collectionsURL + "delete/" + groupId, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify(deletedGroup)
    })
      .then(response => response.json())
      .then(groupIdDelete => {
        console.log("successfully deleted group is: ", groupIdDelete);
        dispatch(deleteGroup(groupIdDelete));
      });
  };
};

export const getAllHabitsInGroupAPI = (habitIdList, groupId) => {
  console.log("check here");
  return dispatch => {
    fetch(habitsURL + "getMany", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(habitIdList)
    })
      .then(response => response.json())
      .then(habits => {
        console.log(habits);
        dispatch(addHabitsToGroup(habits, groupId));
      });
  };
};
