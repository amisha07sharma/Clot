import styled from "styled-components/native";
import { Text, ScrollView } from "react-native";
import { LIGHT_GREY } from "../../../constants/colors";

export const ProductsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  border-radius: 100px;
`;

export const ProductView = styled.View`
  align-items: center;
  margin: 10px;
  background-color: ${LIGHT_GREY};
`;

export const ProductImageView = styled.View``;
export const ProductLabelView = styled.View`
  height: 35px;
  width: 150px;
`;

export const ProductText = styled(Text)`
  font-family: Circular Std;
  font-size: 12px;
  font-weight: 450;
  line-height: 19.2px;
  text-align: left;
`;
