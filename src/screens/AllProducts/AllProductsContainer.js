import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import clot from "../../api/clot";

const AllProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    clot
      .get(`/products`)
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
    <AllProducts
      testID="AllProducts"
      productsList={products}
      loading={loading}
    />
  );
};

AllProductsContainer.propTypes = {};
export default AllProductsContainer;
