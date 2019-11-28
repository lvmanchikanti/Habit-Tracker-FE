const initialState = [];

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_HABIT":
      return [...state, action.payload.habit];

    case "GET_EXISTING_HABITS":
      return action.payload;

    case "DELETE_HABIT":
      return state.filter(habit => habit._id !== action.payload._id);

    case "DELETE_ALL_HABITS_FROM_GROUP":
      let stateCopy = [...state];

      const removeFromArray = (original, remove) => {
        return original.filter(value => !remove.includes(value._id));
      };

      let newHabitState = removeFromArray(stateCopy, action.payload);

      return newHabitState;

    default:
      return state;
  }
};

export default habitReducer;
