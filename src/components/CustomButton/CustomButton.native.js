import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Wrapper, TextWrapper } from "./CustomButton.style";

const CustomButton = ({ title, disabled = false, onPress }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} testID="Press">
      <Wrapper disabled={disabled}>
        <TextWrapper disabled={disabled}>{title}</TextWrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};

CustomButton.prototype = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};
export default CustomButton;
