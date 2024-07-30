import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import CLOT from "../../constants/messages.json";
import CustomButton from "../../components/CustomButton";
import { MainContainer, SubHeadingText } from "../../styles/common.style";
import { ImageWrapper } from "./ResetPassword.style";

const ResetPassword = ({ onContinue }) => {
  return (
    <MainContainer>
      <ImageWrapper>
        <Image source={require("../../Images/EmailSent.png")} />
      </ImageWrapper>
      <SubHeadingText>{CLOT.RESET_PASSWORD_SCREEN.EMAIL_SENT}</SubHeadingText>
      <CustomButton
        title={CLOT.RESET_PASSWORD_SCREEN.RETURN_TO_LOGIN}
        onPress={onContinue}
        testID="ReturnToLogin"
      />
    </MainContainer>
  );
};

ResetPassword.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default ResetPassword;
