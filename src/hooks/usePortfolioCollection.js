import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchPortfolioCollection = (id) => {
  return axios.get(`${process.env.REACT_APP_URL}/portfolio/collections/${id}`, {
    // params: { continuation: pageParam !== "" ? pageParam : "" },
  });
};

export const usePortfolioCollection = (id) => {
  return useInfiniteQuery(
    "portfolio-collection",
    () => fetchPortfolioCollection(id),
    // {
    //   getNextPageParam: (_lastPage, pages) => {
    //     if (pages[0]?.data?.continuation) {
    //       console.log("Page 0", pages[0]?.data?.continuation);
    //       return pages[0]?.data?.continuation;
    //     } else {
    //       console.log("Page undefined");
    //       return undefined;
    //     }
    //   },
    //   cacheTime: 8.64e7,
    //   refetchInterval: 60000,
    //   // keepPreviousData: true,
    // }
  );
};
