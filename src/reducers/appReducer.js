const clearState = {
  email: "",
  firstName: "",
  lastName: "",
  categories: [],
  category: "",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_NAME":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case "UPDATE_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "RESET_STATE":
      return clearState;
    default:
      return state;
  }
};

export default appReducer;
