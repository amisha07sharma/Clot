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
  const [loading, setLoading] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false);
  const [loadingThree, setLoadingThree] = useState(false);

  useEffect(() => {
    setLoading(true);
    clot
      .get("/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
        dispatch({ type: "UPDATE_CATEGORIES", payload: res.data });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [setCategories]);

  useEffect(() => {
    setLoadingTwo(true);
    clot
      .get("/products?limit=5")
      .then((res) => {
        setProducts(res.data);
        setLoadingTwo(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingTwo(false);
      });
  }, [setProducts]);

  useEffect(() => {
    setLoadingThree(true);
    clot
      .get("/products?sort=desc")
      .then((res) => {
        setNewIn(res.data);
        setLoadingThree(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingThree(false);
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
      loading={loading}
      loadingTwo={loadingTwo}
      loadingThree={loadingThree}
    />
  );
};

HomePageContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default HomePageContainer;
