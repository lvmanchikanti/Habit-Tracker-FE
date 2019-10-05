const initialState = [{ habitName: "", habitGroup: "" }];

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_HABIT":
      console.log(action);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default habitReducer;
