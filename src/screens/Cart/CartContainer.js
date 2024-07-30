import React from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";

const CartContainer = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("Categories");
  };
  return <Cart testID="Cart" onContinue={onContinue} />;
};

CartContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CartContainer;
