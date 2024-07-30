import styled from "styled-components/native";
import { Text } from "react-native";
import { BLACK_100, WHITE, LIGHT_GREY, PURPLE } from "../../constants/colors";

export const Wrapper = styled.View`
  background-color: ${({ disabled }) => (disabled ? LIGHT_GREY : PURPLE)};
  align-items: center;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 100px;
`;

export const TextWrapper = styled(Text)`
  font-weight: 500;
  line-height: 26.73px;
  letter-spacing: -0.4957527816295624px;
  text-align: center;
  color: ${({ disabled }) => (disabled ? BLACK_100 : WHITE)};
  font-size: 16px;
`;
