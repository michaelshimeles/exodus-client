import { useQuery } from "react-query";
import axios from "axios";

const fetchPortfolioStats = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/portfolio/wallet/${id}`);
};

export const usePortfolioStats = (id) => {
  return useQuery(["portfolio-stats", id], fetchPortfolioStats, {
    refetchOnMount: false,
    cacheTime: 600000,
    refetchInterval: 120000,
  });
};
