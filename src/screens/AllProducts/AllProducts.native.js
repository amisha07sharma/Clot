import React from "react";
import { ScrollView, Image, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { MainContainer, HeadingText } from "../../styles/common.style";
import { PURPLE } from "../../constants/colors";
import {
  ProductsView,
  ProductView,
  ProductImageView,
  ProductText,
  ProductLabelView,
} from "./AllProducts.style";

const AllProducts = ({ productsList, loading }) => {
  return (
    <MainContainer>
      <HeadingText>All Products</HeadingText>
      {loading ? (
        <ActivityIndicator size="large" color={PURPLE} marginTop={40} />
      ) : (
        <ScrollView>
          <ProductsView>
            {productsList.map((product) => {
              return (
                <ProductView key={product.id}>
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
      )}
    </MainContainer>
  );
};

AllProducts.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AllProducts;
