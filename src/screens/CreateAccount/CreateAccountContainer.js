import React from "react";
import PropTypes from "prop-types";
import CreateAccount from "./CreateAccount";

const CreateAccountContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("BasicDetails");
  };

  const onResetPress = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <CreateAccount
      onContinue={onContinue}
      onResetPress={onResetPress}
      testID="CreateAccount"
    />
  );
};

CreateAccountContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateAccountContainer;
