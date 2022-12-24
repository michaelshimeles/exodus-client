import { useQuery } from "react-query";
import axios from "axios";

const fetchPortfolioGrouped = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/portfolio/grouped/${id}`);
};

export const usePortfolioGrouped = (id) => {
  return useQuery(["portfolio-grouped", id], fetchPortfolioGrouped, {
    cacheTime: 8.64e+7,
    refetchInterval: 60000,
  });
};
