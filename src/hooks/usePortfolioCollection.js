import { useQuery } from "react-query";
import axios from "axios";

const fetchPortfolioCollection = (id) => {
  return axios.get(`${process.env.REACT_APP_URL}/portfolio/collections/${id}`);
};

export const usePortfolioCollection = (id) => {
  return useQuery("portfolio-collection", () => fetchPortfolioCollection(id));
};
