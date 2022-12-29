import { useQuery } from "react-query";
import axios from "axios";

const fetchListingsStats = ({ queryKey }) => {
  let currentTime = Math.round(new Date() / 1000);
  let diffTime = Math.round(
    (new Date().getTime() - Number(queryKey[2]) * 60 * 1000) / 1000
  );

  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/listings/time/${id}`, {
    params: {
      start: diffTime,
      end: currentTime,
      metadata: true,
    },
  });
};

export const useListingsStats = (id, time) => {
  let result = true;
  if (id === undefined) {
    result = false;
  }
  return useQuery(["listings-time-stats", id, time], fetchListingsStats, {
    refetchInterval: 5000,
    cacheTime: 1800000,
    enabled: result,
  });
};
