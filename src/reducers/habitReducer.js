const initialState = [{ habitName: "", habitGroup: "" }];

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_HABIT":
      return [...state, action.payload];
    case "GET_EXISTING_HABITS":
      return state;
    default:
      return state;
  }
};

export default habitReducer;
