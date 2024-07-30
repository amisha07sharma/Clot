import styled from "styled-components/native";
import { Text } from "react-native";
import { BLACK, WHITE, LIGHT_GREY, PURPLE } from "../../../constants/colors";

export const Wrapper = styled.View`
  background-color: ${({ isActive }) => (isActive ? PURPLE : LIGHT_GREY)};
  height: 45px;
  width: 160px;
  border-radius: 100px;
  justify-content: center;
`;

export const TextWrapper = styled(Text)`
  font-weight: 500;
  line-height: 26.73px;
  letter-spacing: -0.4957527816295624px;
  text-align: center;
  color: ${({ isActive }) => (isActive ? WHITE : BLACK)};
  font-size: 16px;
`;
