import SalesCard from "../../components/SalesCard/SalesCard";
import "./SalesTable.scss";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import Loading from "../Loading/Loading";
import { useSalesTable } from "../../hooks/useSalesTable";
const SalesTable = () => {
  const { id } = useParams();

  const { data: salesCards } = useSalesTable(id);

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
        <Loading />
      )}
    </div>
  );
};

export default SalesTable;
