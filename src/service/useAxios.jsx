import axios from "axios";
import { useSelector } from "react-redux";

export const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  const axiosPublic = axios.create({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
  });

  return { axiosWithToken, axiosPublic };
};
