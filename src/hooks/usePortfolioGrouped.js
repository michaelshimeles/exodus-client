import { useQuery } from "react-query";
import axios from "axios";

const fetchPortfolioGrouped = (id) => {
  return axios.get(`${process.env.REACT_APP_URL}/portfolio/grouped/${id}`);
};

export const usePortfolioGrouped = (id) => {
  return useQuery("portfolio-grouped", () => fetchPortfolioGrouped(id));
};
