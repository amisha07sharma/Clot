import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import CLOT from "../../constants/messages.json";
import {
  MainContainer,
  TextInputContainer,
  SectionHeadingText,
  SeeAllText,
} from "../../styles/common.style";
import CategoriesContainer from "./CategoriesContainer";
import ProductsContainer from "./ProductsContainer";

const HomePage = ({
  categories,
  products,
  newIn,
  onCategoriesSeeAll,
  onProductsSeeAll,
  onCategoryIconPress,
}) => {
  const [searchData, setSearchData] = useState(null);
  const onChangeText = (text) => {
    setSearchData(text);
  };

  return (
    <MainContainer>
      <TextInputContainer
        onChangeText={onChangeText}
        placeholder={CLOT.HOMEPAGE_SCREEN.SEARCH}
        value={searchData}
        autoFocus={true}
        borderRadius={500}
        marginTop={-20}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <SectionHeadingText>Categories</SectionHeadingText>
          <TouchableOpacity onPress={onCategoriesSeeAll}>
            <SeeAllText>See All</SeeAllText>
          </TouchableOpacity>
        </View>
        <CategoriesContainer
          categoriesList={categories}
          onCategoryIconPress={onCategoryIconPress}
        />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <SectionHeadingText>Top Selling</SectionHeadingText>
          <TouchableOpacity onPress={onProductsSeeAll}>
            <SeeAllText>See All</SeeAllText>
          </TouchableOpacity>
        </View>
        <ProductsContainer productsList={products} />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <SectionHeadingText>New In</SectionHeadingText>
          <TouchableOpacity onPress={onProductsSeeAll}>
            <SeeAllText>See All</SeeAllText>
          </TouchableOpacity>
        </View>
        <ProductsContainer productsList={newIn} />
      </ScrollView>
    </MainContainer>
  );
};
export default HomePage;
