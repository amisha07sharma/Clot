import React from "react";
import PropTypes from "prop-types";
import clot from "../../api/clot";
import BasicDetails from "./BasicDetails";

const BasicDetailsContainer = ({ navigation }) => {
  const onContinue = () => {
    clot
      .post("/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
      })
      .then((response) => {
        console.log("api call", response.data);
        navigation.navigate("Tabs");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return <BasicDetails onContinue={onContinue} testID="BasicDetails" />;
};

BasicDetailsContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BasicDetailsContainer;
