const initialState = {
  habitCount: 0,
  currentHabits: []
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_HABIT":
      return {
        ...state,
        currentHabits: [...state.currentHabits, action.payload.habit]
      };
    case "GET_EXISTING_HABITS":
      return { ...state, currentHabits: action.payload };
    case "DELETE_HABIT":
      return {
        ...state,
        currentHabits: state.currentHabits.filter(
          habit => habit._id !== action.payload._id
        )
      };

    case "DELETE_ALL_HABITS_FROM_GROUP":
      let habitsCopy = state.currentHabits.splice();

      const removeFromArray = (original, remove) => {
        return original.filter(value => !remove.includes(value._id));
      };

      let newHabitState = removeFromArray(habitsCopy, action.payload);

      console.log(newHabitState);
      return { ...state, currentHabits: newHabitState };
    case "INCREMENT_HABITS":
      return { ...state, habitCount: state.habitCount + 1 };
    default:
      return state;
  }
};

export default habitReducer;
