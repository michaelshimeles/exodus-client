import ListingsCard from "../ListingsCard/ListingsCard";
import "./ListingsTable.scss";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import { useListingsTable } from "../../hooks/useListingsTable";
import { Progress } from "@chakra-ui/react";
import Lottie from "lottie-react";
import loading from "../../assets/animations/loading.json";

const ListingsTable = () => {
  const { id } = useParams();

  const { data: listingsCard, isLoading } = useListingsTable(id);

  if (isLoading) {
    return <Lottie animationData={loading} />;
  }

  return (
    <div className="listings-table">
      {listingsCard ? (
        listingsCard?.data?.data?.orders.map((listing, index) => {
          return (
            <ListingsCard
              className="listings-table__card"
              createdTime={listing.createdAt}
              status={listing.status}
              orderKind={listing.kind}
              updatedTime={listing.updatedTime}
              image={listing.metadata.data.image || eth}
              key={index}
              tokenName={listing.metadata.data.tokenName || ""}
              price={`${listing.price.amount.decimal}` || ""}
            />
          );
        })
      ) : (
        <Progress size="xs" isIndeterminate />
      )}
    </div>
  );
};

export default ListingsTable;
