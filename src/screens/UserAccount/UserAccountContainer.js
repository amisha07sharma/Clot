import React, { useContext } from "react";
import UserAccount from "./UserAccount";
import { AppContext } from "../../context/AppContext";

const UserAccountContainer = () => {
  const { state } = useContext(AppContext);
  return <UserAccount testID="UserAccount" email={state.email} />;
};

UserAccountContainer.propTypes = {};
export default UserAccountContainer;
