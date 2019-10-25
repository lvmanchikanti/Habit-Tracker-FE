//TODO make this empty array
const initialState = [{ habitName: "", habitGroup: "" }];

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_HABIT":
      return [...state, action.payload];
    case "GET_EXISTING_HABITS":
      return action.payload;
    case "DELETE_HABIT":
      return state.filter(habitId => habitId !== action.payload);
    default:
      return state;
  }
};

export default habitReducer;
