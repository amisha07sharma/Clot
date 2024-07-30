import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import HomePage from "./HomePage";
import clot from "../../api/clot";
import { AppContext } from "../../context/AppContext";

const HomePageContainer = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [newIn, setNewIn] = useState([]);

  useEffect(() => {
    clot
      .get("/products/categories")
      .then((res) => {
        setCategories(res.data);
        dispatch({ type: "UPDATE_CATEGORIES", payload: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setCategories]);

  useEffect(() => {
    clot
      .get("/products?limit=5")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProducts]);

  useEffect(() => {
    clot
      .get("/products?sort=desc")
      .then((res) => {
        setNewIn(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProducts]);

  const onCategoriesSeeAll = () => {
    navigation.navigate("Categories");
  };

  const onProductsSeeAll = () => {
    navigation.navigate("AllProducts");
  };

  const onCategoryIconPress = (category) => {
    dispatch({ type: "UPDATE_CATEGORY", payload: category });
    navigation.navigate("ProductsByCategory");
  };
  return (
    <HomePage
      categories={categories}
      products={products}
      newIn={newIn}
      onCategoriesSeeAll={onCategoriesSeeAll}
      onProductsSeeAll={onProductsSeeAll}
      onCategoryIconPress={onCategoryIconPress}
    />
  );
};

HomePageContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default HomePageContainer;
