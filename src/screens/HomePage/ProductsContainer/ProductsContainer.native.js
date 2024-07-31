import React from "react";
import { Image, ScrollView } from "react-native";
import {
  ProductsView,
  ProductView,
  ProductImageView,
  ProductText,
  ProductLabelView,
} from "./ProductsContainer.style";

const ProductsContainer = ({ productsList }) => {
  return (
    <ProductsView>
      <ScrollView horizontal={true}>
        {productsList.map((product) => {
          return (
            <ProductView key={product.id}>
              <ProductImageView>
                <Image
                  source={{ uri: product.image }}
                  style={{ width: 159, height: 281 }}
                />
              </ProductImageView>
              <ProductLabelView>
                <ProductText>{product.title}</ProductText>
                <ProductText>${product.price}</ProductText>
              </ProductLabelView>
            </ProductView>
          );
        })}
      </ScrollView>
    </ProductsView>
  );
};

export default ProductsContainer;
