import React from "react";
import PropTypes from "prop-types";
import { MainContainer, HeadingText } from "../../styles/common.style";
import { categoriesConstants } from "../../constants/Categories.constants";
import { ScrollView, Image } from "react-native";
import {
  ProductsView,
  ProductView,
  ProductImageView,
  ProductText,
  ProductLabelView,
} from "./ProductsByCategory.style";

const ProductsByCategory = ({ category, productsList }) => {
  return (
    <MainContainer>
      <HeadingText>{categoriesConstants[category].title}</HeadingText>
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

ProductsByCategory.propTypes = {
  productsList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductsByCategory;
