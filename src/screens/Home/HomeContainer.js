import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Home from "./Home";

const HomeContainer = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignIn");
    }, 2000);
  }, []);

  return <Home testID="Home" />;
};

HomeContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default HomeContainer;
