import styled from "styled-components/native";
import { Text, TextInput, Platform } from "react-native";
import { LIGHT_GREY, WHITE } from "../constants/colors";

export const MainContainer = styled.View`
  height: 100%;
  padding: 20px;
  background-color: ${WHITE};
  padding-top: 50px;
`;

export const HeadingText = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.41px;
  margin-bottom: 30px;
  line-height: 34.5px;
`;

export const SubHeadingText = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  line-height: 30.36px;
  text-align: center;
  margin-bottom: 30px;
`;

export const SectionHeadingText = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  text-align: left;
`;

export const SeeAllText = styled(Text)`
  font-size: 16px;
  font-weight: 450;
  line-height: 20.24px;
  text-align: left;
`;

export const TextInputContainer = styled(TextInput).attrs((props) => ({
  paddingLeft: 10,
  fontSize: 16,
  borderWidth: 0.1,
  backgroundColor: LIGHT_GREY,
  borderRadius: Platform.OS === "ios" ? 4 : 2,
  marginBottom: 20,
  height: 56,
  lineHeight: 20.24,
  letterSpacing: -0.41,
  ...props,
}))`
  font-weight: 450px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 80px;
`;

export const TextContainer = styled(Text)`
  font-size: 12px;
  line-height: 15.18px;
  letter-spacing: -0.41px;
  font-weight: ${(props) => (props.bold ? "700" : "450")};
`;
