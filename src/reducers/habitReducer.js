const initialState = {
  habitCount: 0,
  currentHabits: []
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_HABIT":
      return {
        ...state,
        currentHabits: [...state.currentHabits, action.payload]
      };
    case "GET_EXISTING_HABITS":
      return { ...state, currentHabits: action.payload };
    case "DELETE_HABIT":
      return {
        ...state,
        currentHabits: state.currentHabits.filter(
          habitId => habitId !== action.payload
        )
      };
    case "INCREMENT_HABITS":
      return { ...state, habitCount: state.habitCount + 1 };
    default:
      return state;
  }
};

export default habitReducer;
