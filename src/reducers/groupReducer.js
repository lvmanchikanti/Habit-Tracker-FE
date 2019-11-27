const initialState = [];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return { ...state, currentGroups: action.payload };
    case "CREATE_NEW_GROUP":
      return [...state, action.payload];
    case "DELETE_GROUP":
      return [...state, action.payload];

    case "ADD_HABITS_TO_GROUP":
      //console.log("add habit, state is: ", state);
      console.log(action.payload);
      let currentGroupsCopy = state.currentGroups.slice();

      //use action.payload.groupId to find group in the currentGroups state
      let groupFound = currentGroupsCopy.find(
        ({ _id }) => _id === action.payload.groupId
      );
      console.log(groupFound);

      //if habitObjects array doesn't exist add it to group
      if (!groupFound.habitObjects) {
        groupFound.habitObjects = action.payload.habits.slice();
      } else {
        groupFound.habitObjects.push(action.payload.habits);
      }

      // console.log(groupFound);

      // //push new habit in to habit objects array
      // groupFound.habitObjects = [
      //   ...groupFound.habitObjects,
      //   action.payload.habits
      // ];

      console.log(state);

      // return Object.assign({}, state, {
      //   currenGroups: currentGroupsCopy
      // });

      return {
        ...state,
        currentGroups: [...state.currentGroups]
      };
    default:
      return state;
  }
};

export default groupReducer;
