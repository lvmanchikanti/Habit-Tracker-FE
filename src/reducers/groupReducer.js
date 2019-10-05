const initialState = [];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return action.payload;
    case "CREATE_NEW_GROUP":
      console.log("new group reducer");
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return initialState;
  }
};

export default groupReducer;
