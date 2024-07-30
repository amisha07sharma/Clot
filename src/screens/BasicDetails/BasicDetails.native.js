import React, { useState } from "react";
import PropTypes from "prop-types";
import CLOT from "../../constants/messages.json";
import CustomButton from "../../components/CustomButton";
import { HeadingText } from "../../styles/common.style";
import { ageRange } from "./BasicDetails.constants";
import RadioButton from "./RadioButton";
import {
  CustomWrapper,
  TopSection,
  BottomSection,
  ContentWrapper,
  TextContainer,
  DropDownPickerContainer,
} from "./BasicDetails.style";

const BasicDetails = ({ onContinue }) => {
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(ageRange);

  return (
    <CustomWrapper>
      <TopSection>
        <HeadingText>{CLOT.BASIC_DETAILS_SCREEN.ABOUT_YOURSELF}</HeadingText>
        <TextContainer>{CLOT.BASIC_DETAILS_SCREEN.SHOP_FOR}</TextContainer>
        <ContentWrapper>
          <RadioButton
            testID="Men"
            title={CLOT.BASIC_DETAILS_SCREEN.MEN}
            onPress={() => {
              setIsActive(true);
            }}
            isActive={isActive}
          />
          <RadioButton
            testID="Women"
            title={CLOT.BASIC_DETAILS_SCREEN.WOMEN}
            onPress={() => {
              setIsActive(false);
            }}
            isActive={!isActive}
          />
        </ContentWrapper>
        <TextContainer>{CLOT.BASIC_DETAILS_SCREEN.HOW_OLD}</TextContainer>
        <DropDownPickerContainer
          testID="DropDown"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={{
            borderWidth: 0.2,
          }}
          textStyle={{
            fontSize: 16,
            fontWeight: 450,
            lineHeight: 20.24,
            textAlign: "left",
          }}
        />
      </TopSection>
      <BottomSection>
        <CustomButton
          testID="ContinueButton"
          title={CLOT.BASIC_DETAILS_SCREEN.FINISH}
          onPress={onContinue}
          disabled={!value}
        />
      </BottomSection>
    </CustomWrapper>
  );
};

BasicDetails.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default BasicDetails;
