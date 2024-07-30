import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import useValidation from "../../hooks/useValidation";
import { WHITE } from "../../constants/colors";
import CLOT from "../../constants/messages.json";
import {
  MainContainer,
  HeadingText,
  TextInputContainer,
  TextWrapper,
  TextContainer,
} from "../../styles/common.style";
import CustomButton from "../../components/CustomButton";

const CreateAccount = ({ onContinue, onResetPress }) => {
  const {
    emailValidation,
    passwordValidation,
    firstNameValidation,
    lastNameValidation,
  } = useValidation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleTextChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };
  const handleLastNameChange = (text) => {
    setLastName(text);
  };
  const disableButton = () => {
    return !(
      emailValidation(email) &&
      passwordValidation(password) &&
      firstNameValidation(firstName) &&
      lastNameValidation(lastName)
    );
  };

  return (
    <MainContainer>
      <HeadingText>{CLOT.CREATE_ACCOUNT_SCREEN.CREATE_ACCOUNT}</HeadingText>
      <TextInputContainer
        testID="FirstNameInput"
        onChangeText={handleFirstNameChange}
        placeholder={CLOT.CREATE_ACCOUNT_SCREEN.FIRST_NAME}
        value={firstName}
      />
      <TextInputContainer
        testID="LastNameInput"
        onChangeText={handleLastNameChange}
        placeholder={CLOT.CREATE_ACCOUNT_SCREEN.LAST_NAME}
        value={lastName}
      />
      <TextInputContainer
        testID="EmailInput"
        onChangeText={handleTextChange}
        placeholder={CLOT.CREATE_ACCOUNT_SCREEN.EMAIL_ADDRESS}
        value={email}
      />
      <TextInputContainer
        testID="PasswordInput"
        onChangeText={handlePasswordChange}
        placeholder={CLOT.CREATE_ACCOUNT_SCREEN.PASSWORD}
        value={password}
      />
      <CustomButton
        testID="ContinueButton"
        title={CLOT.CREATE_ACCOUNT_SCREEN.CONTINUE}
        onPress={onContinue}
        color={WHITE}
        disabled={disableButton()}
      />
      <TextWrapper>
        <TextContainer>
          {CLOT.CREATE_ACCOUNT_SCREEN.FORGOT_PASSWORD}
        </TextContainer>
        <TouchableOpacity onPress={onResetPress} testID="Reset">
          <TextContainer bold={true}>
            {CLOT.CREATE_ACCOUNT_SCREEN.RESET}
          </TextContainer>
        </TouchableOpacity>
      </TextWrapper>
    </MainContainer>
  );
};

CreateAccount.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onResetPress: PropTypes.func.isRequired,
};
export default CreateAccount;
