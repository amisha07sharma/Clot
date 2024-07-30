import styled from "styled-components/native";
import { Text } from "react-native";
import { LIGHT_GREY } from "../../constants/colors";

export const ImageView = styled.View`
  align-items: center;
  margin-top: 50px;
  margin-bottom: 35px;
`;

export const TextView = styled.View`
  align-items: center;
  background-color: ${LIGHT_GREY};
  align-items: left;
  padding-vertical: 20px;
  padding-horizontal: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const TextContainer = styled(Text)`
  font-family: Circular Std;
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? "700" : "450")};
  line-height: 20.24px;
  text-align: left;
  margin-vertical: 2px;
`;
