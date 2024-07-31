import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ProductsByCategory from "./ProductsByCategory";
import clot from "../../api/clot";

const ProductsByCategoryContainer = () => {
  const { state } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    clot
      .get(`/products/category/${state.category}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [setProducts]);

  return (
    <ProductsByCategory
      testID="ProductsByCategory"
      category={state.category}
      productsList={products}
      loading={loading}
    />
  );
};

ProductsByCategoryContainer.propTypes = {};
export default ProductsByCategoryContainer;
