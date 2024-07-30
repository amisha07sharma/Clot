import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../context/AppContext";
import Categories from "./Categories";

const CategoriesContainer = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);
  const onContinue = (category) => {
    dispatch({ type: "UPDATE_CATEGORY", payload: category });
    navigation.navigate("ProductsByCategory");
  };
  return (
    <Categories
      testID="Categories"
      onContinue={onContinue}
      categories={state.categories}
    />
  );
};

CategoriesContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default CategoriesContainer;
