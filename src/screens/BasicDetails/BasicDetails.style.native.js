import styled from "styled-components/native";
import { Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { PURPLE, LIGHT_GREY, WHITE } from "../../constants/colors";

export const CustomWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TopSection = styled.View`
  flex: 0.97;
  background-color: ${WHITE};
  padding: 20px;
`;

export const BottomSection = styled.View`
  background-color: ${LIGHT_GREY};
  padding-horizontal: 20px;
  padding-bottom: 20px;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const CustomButtonWrapper = styled.View`
  background-color: ${(props) => (props.isActive ? PURPLE : LIGHT_GREY)};
  height: 45px;
  width: 160px;
  border-radius: 100px;
  justify-content: center;
`;

export const TextContainer = styled(Text)`
  font-size: 16px;
  font-weight: 450;
  line-height: 20.24px;
  text-align: left;
  margin-bottom: 20px;
`;

export const DropDownPickerContainer = styled(DropDownPicker)`
  border-radius: 100px;
  background-color: ${LIGHT_GREY};
  border-width: 0px;
  padding-horizontal: 20px;
`;
