import {
  GET_EXISTING_GROUPS,
  CREATE_NEW_GROUP
} from "../constants/actionTypes.js";

const collectionsURL = "http://localhost:8000/collections/";

export const getExistingGroups = existingGroups => {
  // TODO: make axios call to get all existing groups
  // const mockGroups = [
  //   { groupName: "Health", groupFriends: [] },
  //   { groupName: "Education", groupFriends: [] },
  //   { groupName: "Self Care", groupFriends: [] },
  //   { groupName: "Hobbies", groupFriends: [] }
  // ];

  console.log(existingGroups);
  return {
    type: GET_EXISTING_GROUPS,
    payload: existingGroups
  };
};

export const createNewGroup = newGroup => {
  console.log(newGroup);
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
        console.log(data);
        dispatch(getExistingGroups(data));
      });
  };
};

export const createGroup = newGroup => {
  console.log(newGroup);
  return dispatch => {
    fetch(collectionsURL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newGroup)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.name !== "MongoError") {
          dispatch(createNewGroup(data));
        }
      });
  };
};
