import React from "react";
import PropTypes from "prop-types";
import UserAccount from "./UserAccount";

const UserAccountContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("UserAccountPassword");
  };

  const onCreateAccountPress = () => {
    navigation.navigate("CreateAccount");
  };
  return (
    <UserAccount
      testID="UserAccount"
      onContinue={onContinue}
      onCreateAccountPress={onCreateAccountPress}
    />
  );
};

UserAccountContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default UserAccountContainer;
