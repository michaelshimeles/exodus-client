import { useQuery } from "react-query";
import axios from "axios";

const fetchFloorPrice = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/floorprice`, {
    params: {
      address: id,
    },
  });
};

export const useFloorPrice = (id) => {
  return useQuery(["floor-price", id], fetchFloorPrice, {
    refetchInterval: 5000,
    cacheTime: 1800000,
  });
};
