import axios from "axios";
import React from "react";

const useAuthCalls = () => {
  const login = async (userInfo) => {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCalls;
