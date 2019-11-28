/*
GROUP ACTION TYPES
*/
export const CREATE_NEW_GROUP = "CREATE_NEW_GROUP";
export const GET_EXISTING_GROUPS = "GET_EXISTING_GROUPS";
export const DELETE_HABIT_FROM_GROUP = "DELETE_HABIT_FROM_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";
export const ADD_HABITS_TO_GROUP = "ADD_HABITS_TO_GROUP";
export const ADD_HABIT_ID_TO_GROUP = "ADD_HABIT_ID_TO_GROUP";
/*
HABIT ACTION TYPES
*/
export const CREATE_NEW_HABIT = "CREATE_NEW_HABIT";
export const GET_EXISTING_HABITS = "GET_EXISTING_HABITS";
export const DELETE_HABIT = "DELETE_HABIT";
export const INCREMENT_HABITS = "INCREMENT_HABITS";

//when you delete a group, you also need to delete all of its habits
export const DELETE_ALL_HABITS_FROM_GROUP = "DELETE_ALL_HABITS_FROM_GROUP";

/*
USER ACTION TYPES
*/
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const GET_EXISTING_USERS = "GET_EXISTING_USERS";
export const DELETE_USER = "DELETE_USER";
export const LOGIN_USER = "LOGIN_USER";
