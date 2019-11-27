const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_USER":
      return [...state, action.payload];
    case "GET_EXISTING_USERS":
      return action.payload;
    case "LOGIN_USER":
        return action.payload;
    default:
      return state;
  }
};

export default userReducer;