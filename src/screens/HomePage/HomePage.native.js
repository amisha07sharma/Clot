import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CLOT from "../../constants/messages.json";
import {
  MainContainer,
  TextInputContainer,
  SectionHeadingText,
  SeeAllText,
} from "../../styles/common.style";
import CategoriesContainer from "./CategoriesContainer";
import ProductsContainer from "./ProductsContainer";
import { PURPLE } from "../../constants/colors";

const HomePage = ({
  categories,
  products,
  newIn,
  onCategoriesSeeAll,
  onProductsSeeAll,
  onCategoryIconPress,
  loading,
  loadingTwo,
  loadingThree,
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
        {loading ? (
          <ActivityIndicator size="small" color={PURPLE} />
        ) : (
          <CategoriesContainer
            categoriesList={categories}
            onCategoryIconPress={onCategoryIconPress}
          />
        )}
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
        {loadingTwo ? (
          <ActivityIndicator size="small" color={PURPLE} />
        ) : (
          <ProductsContainer productsList={products} />
        )}
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
        {loadingThree ? (
          <ActivityIndicator size="small" color={PURPLE} />
        ) : (
          <ProductsContainer productsList={newIn} />
        )}
      </ScrollView>
    </MainContainer>
  );
};
export default HomePage;
