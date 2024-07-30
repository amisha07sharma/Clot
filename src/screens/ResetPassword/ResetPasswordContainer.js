import React from "react";
import PropTypes from "prop-types";
import ResetPassword from "./ResetPassword";

const ResetPasswordContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.push("SignIn");
  };
  return <ResetPassword onContinue={onContinue} testID="ResetPassword" />;
};

ResetPasswordContainer.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ResetPasswordContainer;
