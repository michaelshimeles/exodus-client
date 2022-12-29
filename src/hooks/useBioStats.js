import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchBioStats = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/info/${id}`);
};

export const useBioStats = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["bio-stats", id], fetchBioStats, {
    initialData: () => {
      const name = queryClient
        .getQueryData("bio-stats")
        ?.data.collections.find((collection) => {
          if (collection.id === id) {
            return collection.name;
          }
          return undefined
        });

      if (name) {
        return {
          data: name, 
        };
      } else {
        return undefined;
      }
    },
  });
};
