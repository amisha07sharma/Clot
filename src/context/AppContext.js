import react, { createContext, useReducer } from "react";
import appReducer from "../reducers/appReducer";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
