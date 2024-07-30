import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import clot from "../../api/clot";

const AllProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    clot
      .get(`/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setProducts]);

  return <AllProducts testID="AllProducts" productsList={products} />;
};

AllProductsContainer.propTypes = {};
export default AllProductsContainer;
