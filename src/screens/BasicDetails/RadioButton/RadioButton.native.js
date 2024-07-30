import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Wrapper, TextWrapper } from "./RadioButton.style";

const RadioButton = ({ title, isActive = true, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} testID="Press">
      <Wrapper isActive={isActive}>
        <TextWrapper isActive={isActive}>{title}</TextWrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};

RadioButton.prototype = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};
export default RadioButton;
