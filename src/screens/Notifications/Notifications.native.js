import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import CustomButton from "../../components/CustomButton";
import CLOT from "../../constants/messages.json";
import { MainContainer, SubHeadingText } from "../../styles/common.style";
import { ImageWrapper } from "./Notifications.style";

const Notifications = ({ onContinue }) => {
  return (
    <MainContainer>
      <ImageWrapper>
        <Image source={require("../../Images/bell.png")} />
      </ImageWrapper>
      <SubHeadingText>{CLOT.NOTIFICATION_SCREEN.TITLE}</SubHeadingText>
      <CustomButton
        title={CLOT.CART_SCREEN.BUTTON_TITLE}
        onPress={onContinue}
        testID="ExploreCategories"
      />
    </MainContainer>
  );
};

Notifications.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default Notifications;
