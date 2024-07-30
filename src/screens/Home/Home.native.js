import React from "react";
import { Image } from "react-native";
import { HomeWrapper, ImageWrapper } from "./Home.style";

const Home = () => {
  return (
    <HomeWrapper>
      <ImageWrapper>
        <Image source={require("../../Images/Logo.png")} />
      </ImageWrapper>
    </HomeWrapper>
  );
};
export default Home;
