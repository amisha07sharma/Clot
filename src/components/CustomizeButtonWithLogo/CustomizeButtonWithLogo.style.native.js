import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { LIGHT_GREY, BLACK_100 } from "../../constants/colors";

export const Wrapper = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${LIGHT_GREY};
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 100px;
`;

export const TextContainer = styled.View`
  flex: 0.8;
`;

export const TextWrapper = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  line-height: 26.73px;
  letter-spacing: -0.4957527816295624px;
  text-align: center;
  color: ${BLACK_100};
`;
