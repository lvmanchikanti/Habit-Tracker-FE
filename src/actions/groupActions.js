import {
  GET_EXISTING_GROUPS,
  CREATE_NEW_GROUP
} from "../constants/actionTypes.js";

const collectionsURL = "http://localhost:8000/collections/";

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

export const fetchGroups = () => {
  return dispatch => {
    fetch(collectionsURL)
      .then(response => response.json())
      .then(data => {
        dispatch(getExistingGroups(data));
      });
  };
};

export const createGroup = newGroup => {
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
