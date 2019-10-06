const initialState = [];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return action.payload;
    case "CREATE_NEW_GROUP":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default groupReducer;
