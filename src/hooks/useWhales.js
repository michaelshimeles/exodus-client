import { useQuery } from "react-query";
import axios from "axios";

const fetchWhales = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/whales/${id}`);
};

export const useWhales = (id) => {
  return useQuery(["whales", id], fetchWhales, {
    cacheTime: 900000,
    staleTime: 900000,
  });
};
