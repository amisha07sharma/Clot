import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import CustomButton from "../../components/CustomButton";
import CLOT from "../../constants/messages.json";
import { MainContainer, SubHeadingText } from "../../styles/common.style";
import { ImageWrapper } from "./Cart.style";

const Cart = ({ onContinue }) => {
  return (
    <MainContainer>
      <ImageWrapper>
        <Image source={require("../../Images/cart.png")} />
      </ImageWrapper>
      <SubHeadingText>{CLOT.CART_SCREEN.TITLE}</SubHeadingText>
      <CustomButton
        title={CLOT.CART_SCREEN.BUTTON_TITLE}
        onPress={onContinue}
        testID="ExploreCategories"
      />
    </MainContainer>
  );
};

Cart.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default Cart;
