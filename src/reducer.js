export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
