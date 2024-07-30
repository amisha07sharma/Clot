import React from "react";
import PropTypes from "prop-types";
import { MainContainer, HeadingText } from "../../styles/common.style";
import { categoriesConstants } from "../../constants/Categories.constants";
import CustomizeButtonWithLogo from "../../components/CustomizeButtonWithLogo";

const Categories = ({ onContinue, categories }) => {
  return (
    <MainContainer>
      <HeadingText>Shop by Categories</HeadingText>
      {categories?.map((category) => {
        return (
          <CustomizeButtonWithLogo
            key={categoriesConstants[category].id}
            testID={`ContinueButton-${categoriesConstants[category].id}`}
            imageSource={categoriesConstants[category].imageURL}
            buttonText={categoriesConstants[category].title}
            onPress={() => onContinue(category)}
          />
        );
      })}
    </MainContainer>
  );
};

Categories.propTypes = {
  onContinue: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories;
