import { useQuery } from "react-query";
import axios from "axios";

const fetchTrending = ({ queryKey }) => {
  const time = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/trending`, {
    params: {
      time: time,
    },
  });
};

const fetchFloorPrice = ({ queryKey }) => {
  const address = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/floorprice`, {
    params: {
      address: address,
    },
  });
};

export const useTrending = (time) => {
  return useQuery(["trending", time], fetchTrending);
};

export const useFloorPrice = (address) => {
  let result;
  if (address === undefined) {
    result = false;
  } else {
    result = true;
  }
  return useQuery(["floor-price", address], fetchFloorPrice, {
    enabled: result,
    cacheTime: 1800000,
  });
};
