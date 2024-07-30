import React from "react";
import PropTypes from "prop-types";
import clot from "../../api/clot";
import SignInPassword from "./SignInPassword";

const SignInPasswordContainer = ({ navigation }) => {
  const onContinue = () => {
    clot
      .post("/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      })
      .then((response) => {
        console.log("api call", response.data);
        navigation.push("BasicDetails");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onResetPress = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <SignInPassword
      onContinue={onContinue}
      onResetPress={onResetPress}
      testID="SignInPassword"
    />
  );
};

SignInPasswordContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInPasswordContainer;
