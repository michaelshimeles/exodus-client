import { useQuery } from "react-query";
import axios from "axios";

const fetchTopCollections = () => {
  return axios.get(`${process.env.REACT_APP_URL}/topcollections`);
};

export const useTopCollections = () => {
  return useQuery("top-collections", fetchTopCollections, {
    cacheTime: 86400000,
    staleTime: 86400000,
  });
};
