import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStatsBar } from "../../hooks/useStatsBar";
import { useFloorPrice } from "../../hooks/useFloorPrice";
import { useSalesStats } from "../../hooks/useSalesStats";
import { useListingsStats } from "../../hooks/useListingsStats";
import { Select, Flex, Text, useColorModeValue, Show } from "@chakra-ui/react";
const StatsBar = () => {
  const [time, setTime] = useState(5);
  const [dropDown, setDropDown] = useState(false);

  const { id } = useParams();

  const { data: statsBar } = useStatsBar(id);
  const { data: floorPrice } = useFloorPrice(id);
  const { data: salesStats } = useSalesStats(id, time);
  const { data: listingsStats } = useListingsStats(id, time);

  const momentum = (sales, listings) => {
    if (sales === listings && sales === 0) {
      return "No Vol";
    } else if (sales > listings) {
      return "Bullish";
    } else if (sales === listings && sales > 0) {
      return "Pot. Reversal";
    }

    return "Bearish";
  };

  const clicked = (event) => {
    event.preventDefault();
    setTime(event.target.value);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "whiteAlpha.50");

  return (
    <Flex direction="column" justify="center" align="center" w="100%">
      <Flex justify="flex-end" align="center" w="90%">
        <Select id="time" onChange={clicked} w="86px">
          <option id="time" value="5">
            5m
          </option>
          <option id="time" value="10">
            10m
          </option>
          <option id="time" value="15">
            15m
          </option>
          <option id="time" value="30">
            30m
          </option>
          <option id="time" value="60">
            1h
          </option>
        </Select>
      </Flex>
      <Flex direction="column" justify="center" align="center" w="100%">
        <Flex
          justify="center"
          align="center"
          w="100%"
          p="0.45rem"
          onClick={handleDropDown}
        >
          <Flex
            justify="center"
            align="center"
            w="91%"
            p="0.6rem"
            bgColor={bgColor}
            border="1px"
            borderColor={borderColor}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="20%"
              gap="0.3rem"
            >
              <Show above="md">
                <Text fontSize="0.75rem" fontWeight="bold">
                  Floor Price
                </Text>
                <Text
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxW="13ch"
                  fontSize="0.8rem"
                >
                  {floorPrice
                    ? floorPrice?.data?.sources[0]?.floorAskPrice
                    : "n/a"}
                </Text>
              </Show>

              <Show below="md">
                <Text fontSize="0.75rem" fontWeight="bold">
                  Floor
                </Text>
                <Text
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxW="13ch"
                  fontSize="0.8rem"
                >
                  {floorPrice
                    ? floorPrice?.data?.sources[0]?.floorAskPrice
                    : "n/a"}
                </Text>
              </Show>
            </Flex>
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="20%"
              gap="0.3rem"
            >
              <Show above="md">
                <Text fontSize="0.75rem" fontWeight="bold">
                  Total Listings
                </Text>
              </Show>
              <Show below="md">
                <Text fontSize="0.75rem" fontWeight="bold">
                  T Listings
                </Text>
              </Show>
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxW="13ch"
                fontSize="0.8rem"
              >
                {statsBar ? statsBar?.data?.stats?.tokenListedCount : "n/a"}
              </Text>
            </Flex>
            <Show above="md">
              <Flex
                direction="column"
                justify="center"
                align="center"
                w="20%"
                gap="0.3rem"
              >
                <Text fontSize="0.75rem" fontWeight="bold">
                  Total Supply
                </Text>
                <Text
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxW="13ch"
                  fontSize="0.8rem"
                >
                  {statsBar ? statsBar?.data?.stats?.totalSupply : "n/a"}
                </Text>
              </Flex>
            </Show>
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="20%"
              gap="0.3rem"
            >
              <Text fontSize="0.75rem" fontWeight="bold">
                Listings
              </Text>
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxW="13ch"
                fontSize="0.8rem"
              >
                {listingsStats ? listingsStats?.data?.orders.length : 0}
              </Text>
            </Flex>
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="20%"
              gap="0.3rem"
            >
              <Text fontSize="0.75rem" fontWeight="bold">
                Sales
              </Text>
              <Text
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                maxW="13ch"
                fontSize="0.8rem"
              >
                {salesStats ? salesStats?.data?.sales.length : 0}
              </Text>
            </Flex>
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="20%"
              gap="0.3rem"
            >
              <Show above="md">
                <Text fontSize="0.75rem" fontWeight="bold">
                  Indicator ({time}m)
                </Text>
                <Text fontSize="0.8rem">
                  {momentum(
                    salesStats?.data?.sales.length,
                    listingsStats?.data?.orders.length
                  )}
                </Text>
              </Show>
              <Show below="md">
                <Text fontSize="0.75rem">M.I ({time}m)</Text>
                <Text fontSize="0.8rem">
                  {momentum(
                    salesStats?.data?.sales.length,
                    listingsStats?.data?.orders.length
                  )}
                </Text>
              </Show>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StatsBar;
