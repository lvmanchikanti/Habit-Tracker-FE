import {
  GET_EXISTING_GROUPS,
  CREATE_NEW_GROUP
} from "../constants/actionTypes.js";

export const getExistingGroups = () => {
  // TODO: make axios call to get all existing groups
  const mockGroups = [
    { groupName: "Health", groupFriends: [] },
    { groupName: "Education", groupFriends: [] },
    { groupName: "Self Care", groupFriends: [] },
    { groupName: "Hobbies", groupFriends: [] }
  ];
  return {
    type: GET_EXISTING_GROUPS,
    payload: mockGroups
  };
};

export const createNewGroup = newGroup => {
  console.log("new group action");
  console.log(newGroup);
  return {
    type: CREATE_NEW_GROUP,
    payload: newGroup
  };
};
