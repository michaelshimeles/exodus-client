import {
  Flex, Heading, Select,
  Show,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorMode
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import loading from "../../assets/animations/loading.json";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { useTopCollections } from "../../hooks/useTopCollections";
import { useTrending } from "../../hooks/useTrending";
const TopCollections = () => {
  const [topColClicked, setTopColClicked] = useState(true);
  const [time, setTime] = useState("5m");
  const { colorMode } = useColorMode();

  const { data: topCol, isLoading: topColLoading } = useTopCollections();
  const { data: trending, isLoading: trendingLoading } = useTrending(time);

  const handleSelect = (event) => {
    setTime(event.target.value);
  };

  let color = colorMode === "light" ? "black" : "#90cdf4";

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1.5rem"
      w="100%"
    >
      <Flex justifyContent="space-between" alignItems="center" w="90%">
        <Text
          size="4xl"
          bgGradient="linear-gradient(45deg, rgba(105, 234, 203, 1), rgba(234, 204, 248, 1), rgba(102, 84, 241, 1))"
          bgClip="text"
          fontWeight="extrabold"
          bgSize="100%"
          fontSize="2xl"
          textColor={color}
        >
          {topColClicked ? "Top Collections" : "Trending"}
        </Text>
        <Flex>
          {!topColClicked ? (
            <Select
              id="time"
              placeholder=""
              variant="outline"
              onChange={handleSelect}
              size="sm"
            >
              <option id="time" value="5m">
                5m
              </option>
              <option id="time" value="10m">
                10m
              </option>
              <option id="time" value="15m">
                15m
              </option>
              <option id="time" value="30m">
                30m
              </option>
              <option id="time" value="1h">
                1h
              </option>
              <option id="time" value="6h">
                6h
              </option>
              <option id="time" value="12h">
                12h
              </option>
              <option id="time" value="24h">
                24h
              </option>
            </Select>
          ) : (
            <></>
          )}
          <Tabs
            variant="soft-rounded"
            colorScheme="facebook"
            size="sm"
            ml="1rem"
          >
            <TabList>
              <Tab
                onClick={() => {
                  setTopColClicked(true);
                }}
              >
                📊
              </Tab>
              <Tab
                onClick={() => {
                  setTopColClicked(false);
                }}
              >
                📈
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
      <Flex
        w="90%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          justify="space-between"
          align="center"
          pb="1rem"
          w="100%"
          textColor={color}
          fontWeight="bold"
        >
          <Text w="20%" align="center">
            Name
          </Text>
          <Text w="20%" align="center">
            Floor Price
          </Text>
          <Show above="lg">
            <Text w="20%" align="center">
              {topColClicked ? "Total Supply" : "Total ETH Spent"}
            </Text>
          </Show>
          <Text w="20%" align="center">
            {topColClicked ? "Sales (1W)" : "Listings"}
          </Text>
          <Show above="lg">
            <Text w="20%" align="center">
              {topColClicked ? "Volume (1W)" : "Sales"}
            </Text>
          </Show>
          <Text w="20%" align="center">
            {topColClicked ? "Change % " : "Momentum"}
          </Text>
        </Flex>
        {topColLoading ? <Lottie animationData={loading} /> : <></>}
        {trendingLoading ? <Lottie animationData={loading} /> : <></>}
        <Flex direction="column" w="100%">
          {topColClicked ? (
            topCol?.data?.collections.map((collection) => {
              return (
                <Link
                  to={"/collection/" + collection.id}
                  className="collections__table-link"
                  key={collection?.id}
                >
                  <CollectionCard
                    image={collection.sampleImages[0]}
                    name={collection.name}
                    floorPrice={collection.floorAsk.price?.amount?.decimal}
                    supply={collection.tokenCount}
                    sales={collection.onSaleCount}
                    volume={collection.volume?.["1day"]}
                    change={collection.volumeChange?.["1day"]}
                    topColClicked={topColClicked}
                  />
                </Link>
              );
            })
          ) : trending?.data?.results.length !== 0 ? (
            trending?.data?.results?.map((collection, index) => {
              if (
                collection.name === "BoredApeYachtClub" ||
                collection.name === "MutantApeYachtClub" ||
                collection.name === "Moonbirds" ||
                collection.name === "OpenSea Shared Storefront" ||
                collection.name === "Doodles" ||
                collection.name === "Azuki" ||
                collection.name === "ENS" ||
                collection.name === "CloneX" ||
                collection.name === "Otherdeed" ||
                collection.name === "CyberKongz" ||
                collection.name === "Rarible" ||
                collection.name === "BoredApeKennelClub" ||
                collection.name === "PudgyPenguins" ||
                collection.name === "Cool Cats"
              ) {
                return <div key={index}></div>;
              } else {
                // calling useQuery
                return (
                  <Link
                    to={"/collection/" + collection.contract_address}
                    className="collections__table-link"
                    key={index}
                  >
                    <CollectionCard
                      nameTrending={collection.name}
                      imageTrending={collection.image_url}
                      addressTrending={collection.contract_address}
                      totalEthTrending={collection.total_eth_spent}
                      timeTrending={time}
                    />
                  </Link>
                );
              }
            })
          ) : (
            <Heading>No Trending Found</Heading>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopCollections;
