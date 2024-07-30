import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ForgotPassword from "./ForgotPassword";

const ForgotPasswordContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("ResetPassword");
  };
  return <ForgotPassword onContinue={onContinue} testID="ForgotPassword" />;
};

ForgotPasswordContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ForgotPasswordContainer;
