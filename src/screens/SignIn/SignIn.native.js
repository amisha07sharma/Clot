import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import useValidation from "../../hooks/useValidation";
import CustomizeButtonWithLogo from "../../components/CustomizeButtonWithLogo";
import CustomButton from "../../components/CustomButton";
import { AppContext } from "../../context/AppContext";
import CLOT from "../../constants/messages.json";
import {
  MainContainer,
  HeadingText,
  TextInputContainer,
  TextWrapper,
  TextContainer,
} from "../../styles/common.style";

const SignIn = ({ onContinue, onCreateAccountPress }) => {
  const { state, dispatch } = useContext(AppContext);
  const { emailValidation } = useValidation();
  const [email, setEmail] = useState(state.email);
  const handleTextChange = (text) => {
    setEmail(text);
  };
  const onContinuePress = () => {
    dispatch({ type: "UPDATE_EMAIL", payload: email });
    onContinue();
  };

  return (
    <MainContainer>
      <HeadingText>{CLOT.SIGN_IN_SCREEN.SIGN_IN}</HeadingText>
      <TextInputContainer
        testID="EmailInput"
        onChangeText={handleTextChange}
        value={email}
        placeholder={CLOT.SIGN_IN_SCREEN.EMAIL_ADDRESS}
      />
      <CustomButton
        testID="ContinueButton"
        title={CLOT.SIGN_IN_SCREEN.CONTINUE}
        onPress={onContinuePress}
        disabled={!emailValidation(email)}
      />
      <TextWrapper>
        <TextContainer>{CLOT.SIGN_IN_SCREEN.NO_ACCOUNT}</TextContainer>
        <TouchableOpacity onPress={onCreateAccountPress} testID="CreateAccount">
          <TextContainer bold={true}>
            {CLOT.SIGN_IN_SCREEN.CREATE}
          </TextContainer>
        </TouchableOpacity>
      </TextWrapper>
      <CustomizeButtonWithLogo
        testID="Apple"
        imageSource={require("../../Images/Apple.png")}
        buttonText={CLOT.SIGN_IN_SCREEN.APPLE}
      />
      <CustomizeButtonWithLogo
        testID="Google"
        imageSource={require("../../Images/Google.png")}
        buttonText={CLOT.SIGN_IN_SCREEN.GOOGLE}
      />
      <CustomizeButtonWithLogo
        testID="Facebook"
        imageSource={require("../../Images/Facebook.png")}
        buttonText={CLOT.SIGN_IN_SCREEN.FACEBOOK}
      />
    </MainContainer>
  );
};

SignIn.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onCreateAccountPress: PropTypes.func.isRequired,
};

export default SignIn;
