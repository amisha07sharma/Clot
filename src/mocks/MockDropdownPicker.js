import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

const MockDropDownPicker = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  dropDownContainerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={dropDownContainerStyle}
      onPress={() => setOpen(!open)}
      testID="Dropdown"
    >
      <Text>{value ? value.label : placeholder}</Text>
    </TouchableOpacity>
  );
};

MockDropDownPicker.propTypes = {
  open: PropTypes.bool,
  value: PropTypes.object,
  items: PropTypes.array,
  setOpen: PropTypes.func,
  setValue: PropTypes.func,
  setItems: PropTypes.func,
  placeholder: PropTypes.string,
  dropDownContainerStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default MockDropDownPicker;
