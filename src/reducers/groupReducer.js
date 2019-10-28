const initialState = [];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return action.payload;
    case "CREATE_NEW_GROUP":
      return [...state, action.payload];
    case "ADD_HABITS_TO_GROUP":
      console.log("add habit, state is: ", state);
      console.log(action.payload);
      return "test";
    default:
      return state;
  }
};

export default groupReducer;
