import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/AppContext";
import appReducer from "../reducers/appReducer";

const initialState = {
  email: "mocked_email@example.com",
  firstName: "John",
  lastName: "Doe",
  category: "jewelery",
  categories: [
    {
      id: 5,
      title: "abc",
      price: "123",
      image: "image.url",
    },
    {
      id: 7,
      title: "abcd",
      price: "129",
      image: "image2.url",
    },
  ],
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
