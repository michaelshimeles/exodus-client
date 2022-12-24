import { useQuery } from "react-query";
import axios from "axios";

const fetchSalesStats = ({ queryKey }) => {
  let currentTime = Math.round(new Date() / 1000);
  let diffTime = Math.round(
    (new Date().getTime() - Number(queryKey[2]) * 60 * 1000) / 1000
  );

  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/sales/time/${id}`, {
    params: {
      start: diffTime,
      end: currentTime,
      metadata: true,
    },
  });
};

export const useSalesStats = (id, time) => {
  return useQuery(["sales-time-stats", id, time], fetchSalesStats, {
    refetchInterval: 5000,
  });
};
