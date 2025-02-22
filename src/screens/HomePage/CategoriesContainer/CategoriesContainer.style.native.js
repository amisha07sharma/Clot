import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

export const CategoriesView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const CategoryView = styled(TouchableOpacity)`
  align-items: center;
`;

export const CategoryImageView = styled.View`
  border-radius: 500px;
  align-items: center;
`;

export const CategoryText = styled(Text)`
  width: 85px;
  text-align: center;
`;
