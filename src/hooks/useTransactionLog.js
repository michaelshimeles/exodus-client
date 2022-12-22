import { useQuery } from "react-query";
import axios from "axios";

const fetchTransactionLog = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/owner/activity/${id}`);
};

export const useTransactionLog = (id) => {
  return useQuery(["transaction-log", id], fetchTransactionLog);
};
