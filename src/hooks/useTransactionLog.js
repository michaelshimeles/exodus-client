import { useQuery } from "react-query";
import axios from "axios";

const fetchTransactionLog = (id) => {
  return axios.get(`${process.env.REACT_APP_URL}/owner/activity/${id}`);
};

export const useTransactionLog = (id) => {
  return useQuery("transaction-log", () => fetchTransactionLog(id));
};
