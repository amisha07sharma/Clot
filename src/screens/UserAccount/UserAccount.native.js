import React from "react";
import { Image } from "react-native";
import { MainContainer } from "../../styles/common.style";
import { ImageView, TextView, TextContainer } from "./UserAccount.style";

const UserAccount = ({ email }) => {
  return (
    <MainContainer>
      <ImageView>
        <Image source={require("../../Images/profile.png")} />
      </ImageView>
      <TextView>
        <TextContainer bold={true}>Gilbert Jones</TextContainer>
        <TextContainer>{email}</TextContainer>
        <TextContainer>121-224-7890</TextContainer>
      </TextView>
      <TextView>
        <TextContainer>Address</TextContainer>
      </TextView>
      <TextView>
        <TextContainer>Wishlist</TextContainer>
      </TextView>
      <TextView>
        <TextContainer>Payment</TextContainer>
      </TextView>
      <TextView>
        <TextContainer>Health</TextContainer>
      </TextView>
      <TextView>
        <TextContainer>Support</TextContainer>
      </TextView>
    </MainContainer>
  );
};

UserAccount.propTypes = {
  // onContinue: PropTypes.func.isRequired,
  // onCreateAccountPress: PropTypes.func.isRequired,
};

export default UserAccount;
