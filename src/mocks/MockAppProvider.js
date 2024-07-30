import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/AppContext";
import appReducer from "../reducers/appReducer";

const initialState = {
  email: "mocked_email@example.com",
  firstName: "John",
  lastName: "Doe",
};

const MockAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

MockAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockAppProvider;
