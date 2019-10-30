const initialState = [];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return { ...state, currentGroups: action.payload };
    case "CREATE_NEW_GROUP":
      return {
        ...state,
        currentGroups: [...state.currentGroups, action.payload]
      };
    case "ADD_HABITS_TO_GROUP":
      console.log("add habit, state is: ", state);
      console.log(action.payload);

      //use action.payload.groupId to find group in the currentGroups state
      let groupFound = state.currentGroups.find(
        ({ _id }) => _id === action.payload.groupId
      );
      console.log(groupFound);

      //if habitObjects array doesn't exist add it to group
      if (!groupFound.habitObjects) {
        groupFound.habitObjects = action.payload.habits;
      }

      // console.log(groupFound);

      // //push new habit in to habit objects array
      // groupFound.habitObjects.push(action.payload.habits);

      console.log(groupFound);

      return "test";
    default:
      return state;
  }
};

export default groupReducer;
