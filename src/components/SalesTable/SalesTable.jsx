import { Flex, Progress, Skeleton } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import SalesCard from "../../components/SalesCard/SalesCard";
import { useSalesTable } from "../../hooks/useSalesTable";

const SalesTable = () => {
  const { id } = useParams();

  const { data: salesCards } = useSalesTable(id);

  return (
    <Skeleton isLoaded={salesCards} fadeDuration={2}>
      <Flex
        direction="column"
        justify="flex-start"
        align="center"
        w="100%"
        gap="0.3rem"
        overflow="scroll"
        height="71rem"
      >
        {salesCards?.data ? (
          salesCards?.data?.map((sales) => {
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
      </Flex>
    </Skeleton>
  );
};

export default SalesTable;
