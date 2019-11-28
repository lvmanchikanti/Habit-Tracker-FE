import {
    CREATE_NEW_USER,
    GET_EXISTING_USERS,
    LOGIN_USER
  } from "../constants/actionTypes.js";
  
  const usersURL = "http://localhost:8000/users/";
  
  /*
  REDUX ACTION
  */
  
  export const createNewUser = newUser => {
    // TODO add axios call to POST a new user
    return {
      type: CREATE_NEW_USER,
      payload: newUser
    };
  };
  
  export const getExistingUsers = existingUsers => {
    return {
      type: GET_EXISTING_USERS,
      payload: existingUsers
    };
  };

  export const loginUser = loginUser => {
    return {
      type: LOGIN_USER,
      payload: loginUser
    };
  };
  
  /*
  API CALLS
  */
  
  // NOTE: May not need now that we fetch in App.js
  export const getExistingUsersAPI = () => {
    return async dispatch => {
      let response = await fetch(usersURL);
      let data = await response.json();
  
      console.log(data);
  
      dispatch(getExistingUsers(data));
    };
  };
  
  export const createNewUserAPI = newUser => {
    return dispatch => {
      fetch(usersURL + "register", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(data => {
          if (data.name !== "MongoError") {
            dispatch(createNewUser(data));
          }
        });
    };
  };
  