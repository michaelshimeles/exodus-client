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
import { Fragment, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import {
  Flex,
  Button,
  Grid,
  GridItem,
  VStack,
  Show,
  Box,
} from "@chakra-ui/react";

const Terminal = () => {
  const [clicked, setClicked] = useState(true);
  window.scrollTo(0, 0);

  return (
    <Layout>
      <Flex direction="column" justify="center" align="center">
        <NavBar />
        <CollectionBio />
        <StatsBar />
        <Flex justify="flex-end" align-items="center" w="90%" h="auto">
          <Button
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            More
          </Button>
        </Flex>
        {clicked ? (
          <>
            <Show above="lg">
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(11, 1fr)"
                gap={4}
                w="90%"
                mt="1rem"
              >
                <GridItem rowSpan={1} colSpan={5}>
                  <SalesChart />
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                  <ListingsTable />
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                  <SalesTable />
                </GridItem>
                <GridItem rowSpan={1} colSpan={5}>
                  <ListingsChart />
                </GridItem>
              </Grid>
            </Show>
            <Show below="lg">
              <VStack w="90%">
                <Box pt="1rem" w="full">
                  <SalesChart />
                </Box>

                <ListingsChart />
                <ListingsTable />
                <SalesTable />
              </VStack>
            </Show>
          </>
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
