import SalesCard from "../../components/SalesCard/SalesCard";
import "./SalesTable.scss";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import Loading from "../Loading/Loading";
import { useSalesTable } from "../../hooks/useSalesTable";
import { Text } from "@chakra-ui/react";
const SalesTable = () => {
  const { id } = useParams();

  const { data: salesCards } = useSalesTable(id);

  return (
    <div className="sales-table">
            <Text textAlign="left" fontSize="l" fontWeight="bold" w="full" pb="0.4rem">Sales</Text>
      {salesCards?.data ? (
        salesCards?.data?.map((sales, index) => {
          return (
            <SalesCard
              image={sales?.image || eth}
              price={sales?.priceInEth}
              orderSource={sales?.orderSource}
              tokenId={sales?.tokenId}
              key={sales?.id}
              timestamp={sales?.timestamp}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SalesTable;
