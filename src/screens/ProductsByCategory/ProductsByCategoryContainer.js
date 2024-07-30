import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ProductsByCategory from "./ProductsByCategory";
import clot from "../../api/clot";

const ProductsByCategoryContainer = () => {
  const { state } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    clot
      .get(`/products/category/${state.category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProducts]);

  return (
    <ProductsByCategory
      testID="ProductsByCategory"
      category={state.category}
      productsList={products}
    />
  );
};

ProductsByCategoryContainer.propTypes = {};
export default ProductsByCategoryContainer;
