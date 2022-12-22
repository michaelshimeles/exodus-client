import { useQuery } from "react-query";
import axios from "axios";

const fetchListingsCard = (id) => {
    return axios.get(`${process.env.REACT_APP_URL}/listings/${id}`);
  };

export const useListingsTable = (id) => {
  return useQuery("listings-table", () => fetchListingsCard(id), {
    cacheTime: 0,
    refetchInterval: 5000,
    // refetchIntervalInBackground: true // refreshes data while out of focus
  });
};