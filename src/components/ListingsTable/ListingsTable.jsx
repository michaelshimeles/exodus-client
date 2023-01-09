import ListingsCard from "../ListingsCard/ListingsCard";
import "./ListingsTable.scss";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import Loading from "../Loading/Loading";
import { useListingsTable } from "../../hooks/useListingsTable";
import { Text } from "@chakra-ui/react";

const ListingsTable = () => {
  const { id } = useParams();

  const { data: listingsCard } = useListingsTable(id);

  return (
    <div className="listings-table">
      <Text
        textAlign="left"
        fontSize="l"
        fontWeight="bold"
        w="full"
        pb="0.4rem"
      >
        Listings
      </Text>

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
        <Loading />
      )}
    </div>
  );
};

export default ListingsTable;
