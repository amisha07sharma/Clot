import React from "react";
import PropTypes from "prop-types";
import Notifications from "./Notifications";

const NotificationsContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("Categories");
  };
  return <Notifications testID="Notifications" onContinue={onContinue} />;
};

NotificationsContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotificationsContainer;
