import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

export const useStockCalls = () => {
  const { axiosWithToken } = useAxios;
  const dispatch = useDispatch();

  const getStocks = async (url = "firms") => {
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStockSuccess({ apiData, url }));
    } catch (error) {}
  };

  return {};
};
