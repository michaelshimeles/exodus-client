import { useQuery } from "react-query";
import axios from "axios";

const fetchSalesTable = (id) => {
  return axios.get(`${process.env.REACT_APP_URL}/sales/${id}`);
};

export const useSalesTable = (id) => {
  return useQuery("sales-table", () => fetchSalesTable(id), {
    cacheTime: 0, // no caching
    refetchInterval: 5000,
    // refetchIntervalInBackground: true // refreshes data while out of focus
  });
};
