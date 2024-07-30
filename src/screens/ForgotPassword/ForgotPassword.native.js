import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import useValidation from "../../hooks/useValidation";
import { AppContext } from "../../context/AppContext";
import CLOT from "../../constants/messages.json";
import {
  MainContainer,
  HeadingText,
  TextInputContainer,
} from "../../styles/common.style";
import CustomButton from "../../components/CustomButton";

const ForgotPassword = ({ onContinue }) => {
  const { state, dispatch } = useContext(AppContext);
  const { emailValidation } = useValidation();
  const [email, setEmail] = useState(null);
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const onContinuePress = () => {
    dispatch({ type: "UPDATE_EMAIL", payload: email });
    onContinue();
  };

  return (
    <MainContainer>
      <HeadingText>{CLOT.FORGOT_PASSWORD_SCREEN.FORGOT_PASSWORD}</HeadingText>
      <TextInputContainer
        testID="EmailInput"
        onChangeText={handleEmailChange}
        placeholder={CLOT.FORGOT_PASSWORD_SCREEN.ENTER_EMAIL}
        value={email}
      />
      <CustomButton
        testID="ContinueButton"
        title={CLOT.FORGOT_PASSWORD_SCREEN.CONTINUE}
        onPress={onContinuePress}
        disabled={!emailValidation(email)}
      />
    </MainContainer>
  );
};

ForgotPassword.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default ForgotPassword;
