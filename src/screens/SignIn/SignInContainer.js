import React from "react";
import PropTypes from "prop-types";
import SignIn from "./SignIn";

const SignInContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("SignInPassword");
  };

  const onCreateAccountPress = () => {
    navigation.navigate("CreateAccount");
  };
  return (
    <SignIn
      testID="SignIn"
      onContinue={onContinue}
      onCreateAccountPress={onCreateAccountPress}
    />
  );
};

SignInContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default SignInContainer;
