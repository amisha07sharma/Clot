import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useValidation } from "../../hooks";
import CLOT from "../../constants/messages.json";
import {
  MainContainer,
  HeadingText,
  TextInputContainer,
  TextWrapper,
  TextContainer,
} from "../../styles/common.style";
import CustomButton from "../../components/CustomButton";

const SignInPassword = ({ onContinue, onResetPress }) => {
  const { passwordValidation } = useValidation();

  const [password, setPassword] = useState(null);
  const handleTextChange = (text) => {
    setPassword(text);
  };

  return (
    <MainContainer>
      <HeadingText>{CLOT.SIGN_IN_SCREEN.SIGN_IN}</HeadingText>
      <TextInputContainer
        testID="PasswordInput"
        onChangeText={handleTextChange}
        placeholder={CLOT.SIGN_IN_SCREEN.PASSWORD}
        value={password}
        autoFocus={true}
      />
      <CustomButton
        testID="ContinueButton"
        title={CLOT.SIGN_IN_SCREEN.CONTINUE}
        onPress={() => onContinue(password)}
        disabled={!passwordValidation(password)}
      />

      <TextWrapper>
        <TextContainer>{CLOT.SIGN_IN_SCREEN.FORGOT_PASSWORD}</TextContainer>
        <TouchableOpacity onPress={onResetPress} testID="Reset">
          <TextContainer bold={true}>{CLOT.SIGN_IN_SCREEN.RESET}</TextContainer>
        </TouchableOpacity>
      </TextWrapper>
    </MainContainer>
  );
};

SignInPassword.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onResetPress: PropTypes.func.isRequired,
};

export default SignInPassword;
