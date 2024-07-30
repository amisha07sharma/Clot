import React from "react";
import { Image, Modal, Text } from "react-native";

const ErrorModal = ({ catagories, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <Text>hello</Text>
    </Modal>
  );
};
export default ErrorModal;
