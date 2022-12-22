import { useQuery } from "react-query";
import axios from "axios";

const fetchPortfolioStats = (id) => {
  return axios.get(`${process.env.REACT_APP_URL}/portfolio/wallet/${id}`);
};

export const usePortfolioStats = (id) => {
  return useQuery("portfolio-stats", () => fetchPortfolioStats(id), {
    refetchOnMount: false,
    cacheTime: 600000,
    refetchInterval: 120000,
  });
};
