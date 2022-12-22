import { useQuery } from "react-query";
import axios from "axios";

const fetchSalesTable = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/sales/${id}`);
};

export const useSalesTable = (id) => {
  return useQuery(["sales-table", id], fetchSalesTable, {
    refetchInterval: 5000,
    // refetchIntervalInBackground: true // refreshes data while out of focus
  });
};
