import { useQuery } from "react-query";
import axios from "axios";

const fetchListingsCard = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/listings/${id}`);
};

export const useListingsTable = (id) => {
  return useQuery(["listings-table", id], fetchListingsCard, {
    refetchInterval: 5000,
  });
};