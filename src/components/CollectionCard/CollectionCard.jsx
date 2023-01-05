import {
  Box,
  HStack,
  Image,
  Show,
  SimpleGrid,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import eth from "../../assets/images/ethereum.svg";
import { useListingsStats } from "../../hooks/useListingsStats";
import { useSalesStats } from "../../hooks/useSalesStats";
import { useFloorPrice } from "../../hooks/useTrending";
import "./CollectionCard.scss";
const CollectionCard = ({
  name,
  image,
  floorPrice,
  supply,
  sales,
  volume,
  change,
  topColClicked,
  nameTrending,
  imageTrending,
  totalEthTrending,
  addressTrending,
  timeTrending,
}) => {
  const { data: floor } = useFloorPrice(addressTrending);

  const { data: listingStats } = useListingsStats(
    addressTrending,
    timeTrending?.includes("h")
      ? timeTrending?.split("h")[0]
      : timeTrending?.split("m")[0]
  );

  const { data: salesStats } = useSalesStats(
    addressTrending,
    timeTrending?.split("m")[0]
  );

  const momentum = (sales, listings) => {
    if (sales === listings && sales === 0) {
      return "No Volume";
    } else if (sales > listings) {
      return "Bullish";
    } else if (sales === listings && sales > 0) {
      return "Pot. Reversal";
    } else if (sales < listings) {
      return "Bearish";
    }

    return "Calculating..";
  };

  const variant = useBreakpointValue({
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <Box w="full">
      {topColClicked ? (
        <SimpleGrid
          columns={variant === "lg" || variant === "xl" ? 6 : 4}
          fontSize={["xs", "xs", "xs", "sm"]}
          h="3.5rem"
          w="full"
          bgColor="whiteAlpha.100"
          pl="1.25rem"
          border="1px"
          borderColor="whiteAlpha.100"
          mb="0.25rem"
        >
          <HStack>
            <Image src={image} rounded="full" w="2rem" />
            <Text
              maxW="22ch"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {name}
            </Text>
          </HStack>
          <Text m="auto">{floorPrice}</Text>
          <Show above="lg">
            <Text m="auto">{supply}</Text>
          </Show>
          <Text m="auto">{sales}</Text>
          <Show above="lg">
            <Text m="auto">{volume}</Text>
          </Show>
          <Text m="auto">{Math.round(change * 100)}%</Text>
        </SimpleGrid>
      ) : (
        <SimpleGrid
          columns={variant === "lg" || variant === "xl" ? 6 : 4}
          fontSize={["xs", "xs", "xs", "sm"]}
          h="3.5rem"
          w="full"
          bgColor="whiteAlpha.100"
          pl="1.25rem"
          border="1px"
          borderColor={"whiteAlpha.100"}
          mb="0.25rem"
        >
          <HStack>
            <Image
              src={imageTrending ? imageTrending : eth}
              rounded="full"
              w="1rem"
            />
            <Text
              maxW="22ch"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {nameTrending}
            </Text>
          </HStack>
          <Text m="auto">{floor?.data?.sources[0]?.floorAskPrice}</Text>
          <Show above="lg">
            <Text m="auto">{totalEthTrending}</Text>
          </Show>
          <Text m="auto">{listingStats?.data?.orders.length}</Text>
          <Show above="lg">
            <Text m="auto">{salesStats?.data?.sales.length}</Text>
          </Show>
          <Text m="auto">
            {momentum(
              salesStats?.data?.sales.length,
              listingStats?.data?.orders.length
            )}
          </Text>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default CollectionCard;
