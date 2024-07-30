import React from "react";
import PropTypes from "prop-types";
import Orders from "./Orders";

const OrdersContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("Categories");
  };
  return <Orders testID="Orders" onContinue={onContinue} />;
};

OrdersContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OrdersContainer;
