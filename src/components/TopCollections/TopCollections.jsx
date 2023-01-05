import {
  Flex, Progress, Select,
  Show,
  Tab,
  TabList,
  Tabs,
  Text
} from "@chakra-ui/react";
import { useState } from "react";

import { Link } from "react-router-dom";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { useTopCollections } from "../../hooks/useTopCollections";
import { useTrending } from "../../hooks/useTrending";
import "./TopCollections.scss";
const TopCollections = () => {
  const [topColClicked, setTopColClicked] = useState(true);
  const [time, setTime] = useState("5m");

  const { data: topCol, isLoading: topColLoading } = useTopCollections();

  const { data: trending, isLoading: trendingLoading } = useTrending(time);

  const handleSelect = (event) => {
    setTime(event.target.value);
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="1.5rem" paddingBottom="5rem">
      <Flex justifyContent="space-between" alignItems="center" w="90%" >
        <Text
          size="4xl"
          bgGradient="linear-gradient(45deg, rgba(105, 234, 203, 1), rgba(234, 204, 248, 1), rgba(102, 84, 241, 1))"
          bgClip="text"
          fontWeight="extrabold"
          bgSize="100%"
          fontSize="2xl"
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
        <div className="collections__table">
          <p className="collections__table-item">Name</p>
          <p className="collections__table-item">{"Floor Price"}</p>
          <Show above="lg">
            <p className="collections__table-item">
              {topColClicked ? "Total Supply" : "Total ETH Spent"}
            </p>
          </Show>
          <p className="collections__table-item">
            {topColClicked ? "Sales (1W)" : "Listings"}
          </p>
          <Show above="lg">
            <p className="collections__table-item">
              {topColClicked ? "Volume (1W)" : "Sales"}
            </p>
          </Show>
          <p className="collections__table-item">
            {topColClicked ? "Change % " : "Momentum"}
          </p>
        </div>
        {topColLoading ? <Progress size="xs" isIndeterminate /> : <></>}
        {trendingLoading ? <Progress size="xs" isIndeterminate /> : <></>}
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
          <p>No Trending Found</p>
        )}
      </Flex>
    </Flex>
  );
};

export default TopCollections;
