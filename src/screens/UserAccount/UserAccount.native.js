import React, { useState, useContext } from "react";
import { Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import {
  MainContainer,
  HeadingText,
  TextInputContainer,
  TextWrapper,
  TextContainer,
} from "../../styles/common.style";
import { ImageView } from "./UserAccount.style";

const UserAccount = ({ onContinue, onCreateAccountPress }) => {
  return (
    <MainContainer>
      <ImageView>
        <Image source={require("../../Images/profile.png")} />
      </ImageView>
    </MainContainer>
  );
};

UserAccount.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onCreateAccountPress: PropTypes.func.isRequired,
};

export default UserAccount;
