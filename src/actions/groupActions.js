import { GET_EXISTING_GROUPS } from "../constants/actionTypes.js";
import axios from "axios";

export const getExistingGroups = () => {
  // TODO: make axios call to get all existing groups
  const mockGroups = ["Health", "Education", "Self Care", "Hobbies"];
  return {
    type: GET_EXISTING_GROUPS,
    payload: mockGroups
  };
};
