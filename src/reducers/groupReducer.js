const initialState = [];

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXISTING_GROUPS":
      return action.payload;
    default:
      return initialState;
  }
};

export default groupReducer;
