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
        throw new Error(err);
        //show ERROR MODAL
      });
  }, [setCategories]);

  useEffect(() => {
    clot
      .get("/products?limit=5")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        throw new Error(err);
        //show ERROR MODAL
      });
  }, [setProducts]);

  useEffect(() => {
    clot
      .get("/products?sort=desc")
      .then((res) => {
        setNewIn(res.data);
      })
      .catch((err) => {
        throw new Error(err);
        //show ERROR MODAL
      });
  }, [setProducts]);

  const onCategoriesSeeAll = () => {
    navigation.navigate("Categories");
  };

  const onProductsSeeAll = () => {
    navigation.navigate("AllProducts");
  };

  return (
    <HomePage
      categories={categories}
      products={products}
      newIn={newIn}
      onCategoriesSeeAll={onCategoriesSeeAll}
      onProductsSeeAll={onProductsSeeAll}
    />
  );
};

HomePageContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default HomePageContainer;
