import SalesCard from "../../components/SalesCard/SalesCard";
import "./SalesTable.scss";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import { useSalesTable } from "../../hooks/useSalesTable";
import { Progress, Skeleton } from "@chakra-ui/react";
const SalesTable = () => {
  const { id } = useParams();

  const { data: salesCards, isLoading } = useSalesTable(id);

  if (isLoading) {
    return (
      <Skeleton boxShadow="lg" fadeDuration={5}>
        <div className="listings-table"></div>
      </Skeleton>
    );
  }

  return (
    <div className="sales-table">
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
        <Progress size="xs" isIndeterminate />
      )}
    </div>
  );
};

export default SalesTable;
