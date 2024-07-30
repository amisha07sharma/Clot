import React from "react";
import { ScrollView, Image } from "react-native";
import PropTypes from "prop-types";
import { MainContainer, HeadingText } from "../../styles/common.style";
import {
  ProductsView,
  ProductView,
  ProductImageView,
  ProductText,
  ProductLabelView,
} from "./AllProducts.style";

const AllProducts = ({ productsList }) => {
  return (
    <MainContainer>
      <HeadingText>All Products</HeadingText>
      <ScrollView>
        <ProductsView>
          {productsList.map((product) => {
            return (
              <ProductView>
                <ProductImageView>
                  <Image
                    source={{ uri: product.image }}
                    style={{ width: 150, height: 220 }}
                  />
                </ProductImageView>
                <ProductLabelView>
                  <ProductText>{product.title}</ProductText>
                  <ProductText>${product.price}</ProductText>
                </ProductLabelView>
              </ProductView>
            );
          })}
        </ProductsView>
      </ScrollView>
    </MainContainer>
  );
};

AllProducts.propTypes = {
  productsList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllProducts;
