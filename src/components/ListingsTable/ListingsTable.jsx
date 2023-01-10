import ListingsCard from "../ListingsCard/ListingsCard";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import { useListingsTable } from "../../hooks/useListingsTable";
import { Flex, Progress, Skeleton } from "@chakra-ui/react";

const ListingsTable = () => {
  const { id } = useParams();

  const { data: listingsCard } = useListingsTable(id);

  return (
    <Skeleton isLoaded={listingsCard} fadeDuration={2}>
      <Flex
        direction="column"
        justify="flex-start"
        align="center"
        w="100%"
        gap="0.3rem"
        overflow="scroll"
        height="71rem"
      >
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
      </Flex>
    </Skeleton>
  );
};

export default ListingsTable;
