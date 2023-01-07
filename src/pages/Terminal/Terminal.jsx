import NavBar from "../../components/NavBar/NavBar";
import CollectionBio from "../../components/CollectionBio/CollectionBio";
import StatsBar from "../../components/StatsBar/StatsBar";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import SalesTable from "../../components/SalesTable/SalesTable";
import SalesChart from "../../components/SalesChart/SalesChart";
import ListingsChart from "../../components/ListingsChart/ListingsChart";
import HoldersChart from "../../components/HoldersChart/HoldersChart";
import FloorChart from "../../components/FloorChart/FloorChart";
import "./Terminal.scss";
import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Flex, Button } from "@chakra-ui/react";
const Terminal = () => {
  const [clicked, setClicked] = useState(true);
  window.scrollTo(0, 0);

  return (
    <Layout>
      <Flex direction="column" justify="center" align="center">
        <NavBar />
        <CollectionBio />
        <StatsBar />
        <Flex justify="flex-end" align-items="center" w="85%" h="auto">
          <Button
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            More
          </Button>
        </Flex>
        {clicked ? (
          <div className="terminal__tx">
            <div className="terminal__charts">
              <p>Sales Chart</p>
              <SalesChart />
              <p>Listings Distribution</p>
              <ListingsChart />
            </div>
            <div className="terminal__cards">
              <div className="terminal__card">
                <div className="terminal__card-title">
                  <p>Listings</p>
                  <div className="terminal__card-sort">
                    <span className="blink_me"></span>
                  </div>
                </div>
                <ListingsTable />
              </div>
              <div className="terminal__card">
                <div className="terminal__card-title">
                  <p>Sales</p>
                  <span className="blink_me"></span>
                </div>
                <SalesTable />
              </div>
            </div>
          </div>
        ) : (
          <div className="terminal__other">
            <div className="terminal__holders">
              <HoldersChart />
              <FloorChart />
            </div>
          </div>
        )}
      </Flex>
    </Layout>
  );
};

export default Terminal;
