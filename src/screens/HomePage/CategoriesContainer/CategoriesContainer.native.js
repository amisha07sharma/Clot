import React from "react";
import { Image } from "react-native";
import {
  CategoriesView,
  CategoryView,
  CategoryImageView,
  CategoryText,
} from "./CategoriesContainer.style";
import { categoriesConstants } from "../../../constants/Categories.constants";

const CategoriesContainer = ({ categoriesList, onCategoryIconPress }) => {
  return (
    <CategoriesView>
      {categoriesList?.map((category) => {
        return (
          <CategoryView
            onPress={() => onCategoryIconPress(category)}
            key={categoriesConstants[category].id}
          >
            <CategoryImageView>
              <Image
                source={categoriesConstants[category].imageURL}
                style={{ width: 56, height: 56, borderRadius: 500 }}
              />
            </CategoryImageView>
            <CategoryText>{categoriesConstants[category].title}</CategoryText>
          </CategoryView>
        );
      })}
    </CategoriesView>
  );
};

export default CategoriesContainer;
