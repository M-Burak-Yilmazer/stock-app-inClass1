import { useAxios } from "./useAxios";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  logOutSuccess,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const { axiosPublic, axiosWithToken } = useAxios;
const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("login successfully");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("you couldn't log in");
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      navigate("/stock");
      toastSuccessNotify("register succesfully");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
      console.log(error);
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get("/auth/logout/");
      toastSuccessNotify("logout succesfully");
      dispatch(logOutSuccess());
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
