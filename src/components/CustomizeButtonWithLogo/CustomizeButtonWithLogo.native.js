import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import {
  Wrapper,
  TextWrapper,
  TextContainer,
} from "./CustomizeButtonWithLogo.style";

const CustomizeButtonWithLogo = ({
  imageSource,
  buttonText,
  onPress = () => {},
}) => {
  return (
    <Wrapper onPress={onPress} testID="Press">
      <Image
        source={imageSource}
        style={{ height: 40, width: 40, borderRadius: 200 }}
      />
      <TextContainer>
        <TextWrapper>{buttonText}</TextWrapper>
      </TextContainer>
    </Wrapper>
  );
};

CustomizeButtonWithLogo.prototype = {
  imageSource: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
export default CustomizeButtonWithLogo;
