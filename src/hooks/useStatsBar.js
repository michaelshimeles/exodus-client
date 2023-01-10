import { useQuery } from "react-query";
import axios from "axios";

const fetchStatsBar = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/info/${id}`);
};

export const useStatsBar = (id) => {
  return (
    useQuery(["stats-bar", id], fetchStatsBar),
    {
      cacheTime: 1800000,
    }
  );
};
