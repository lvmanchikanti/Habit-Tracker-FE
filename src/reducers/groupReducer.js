const initialState = {
  currentGroups: []
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return { ...state, currentGroups: action.payload };

    case "CREATE_NEW_GROUP":
      return {
        ...state,
        currentGroups: [...state.currentGroups, action.payload]
      };

    case "DELETE_GROUP":
      return {
        ...state,
        currentGroups: state.currentGroups.filter(
          group => group._id !== action.payload._id
        )
      };

    case "ADD_HABITS_TO_GROUP":
      let currentGroupsCopy = state.currentGroups.slice();

      //use action.payload.groupId to find group in the currentGroups state
      let groupFound = currentGroupsCopy.find(
        ({ _id }) => _id === action.payload.groupId
      );
      groupFound.habitObjects = action.payload.habits.slice();

      return {
        ...state,
        currentGroups: [...state.currentGroups]
      };

    case "ADD_HABIT_ID_TO_GROUP":
      let currGroupsCopy = state.currentGroups.slice();

      //use action.payload.groupId to find group in the currentGroups state
      let group = currGroupsCopy.find(
        ({ _id }) => _id === action.payload.groupId
      );

      //if habitObjects array doesn't exist add it to group
      group.habitIds.push(action.payload.habitId);

      return {
        ...state,
        currentGroups: [...state.currentGroups]
      };

    case "DELETE_HABIT_FROM_GROUP":
      let currGroupsDup = state.currentGroups.slice();

      //use action.payload.groupId to find group in the currentGroups state
      let groupTarget = currGroupsDup.find(
        ({ _id }) => _id === action.payload.groupId
      );

      //delete habit id from array of habit ids
      groupTarget.habitIds = groupTarget.habitIds.filter(
        habitId => habitId !== action.payload.habitId
      );

      //delete habit object, by habit id, from habit objects array
      groupTarget.habitObjects = groupTarget.habitObjects.filter(
        habitObj => habitObj._id !== action.payload.habitId
      );

      return {
        ...state,
        currentGroups: [...state.currentGroups]
      };

    default:
      return state;
  }
};

export default groupReducer;
