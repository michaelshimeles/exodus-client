import { useQuery } from "react-query";
import axios from "axios";

const fetchHotMints = ({ queryKey }) => {
  const time = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/hotmints`, {
    params: {
      time: time,
    },
  });
};

export const useHotMints = (time) => {
  return useQuery(["hot-mints", time], fetchHotMints);
};
