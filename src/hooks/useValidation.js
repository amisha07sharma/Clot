import { useCallback } from "react";

const useValidation = () => {
  const emailValidation = useCallback((email) => {
    if (email && email.includes("@") && email.includes(".") && email.length > 5)
      return true;
    return false;
  }, []);

  const passwordValidation = useCallback((password) => {
    if (password && password.length > 4) return true;
    return false;
  }, []);

  const firstNameValidation = useCallback((firstName) => {
    if (firstName && firstName.length > 2) return true;
    return false;
  }, []);

  const lastNameValidation = useCallback((lastName) => {
    if (lastName && lastName.length > 2) return true;
    return false;
  }, []);

  return {
    emailValidation,
    passwordValidation,
    firstNameValidation,
    lastNameValidation,
  };
};

export default useValidation;
