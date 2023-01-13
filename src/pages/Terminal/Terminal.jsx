import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  Text,
  VStack
} from "@chakra-ui/react";
import CollectionBio from "../../components/CollectionBio/CollectionBio";
import HoldersChart from "../../components/HoldersChart/HoldersChart";
import { Layout } from "../../components/Layout/Layout";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import NavBar from "../../components/NavBar/NavBar";
import SalesChart from "../../components/SalesChart/SalesChart";
import SalesTable from "../../components/SalesTable/SalesTable";
import StatsBar from "../../components/StatsBar/StatsBar";

const Terminal = () => {
  window.scrollTo(0, 0);

  return (
    <Layout>
      <Flex direction="column" justify="center" align="center">
        <NavBar />
        <CollectionBio />
        <StatsBar />
        <>
          <Show above="lg">
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(11, 1fr)"
              gap={4}
              w="90%"
              mt="1rem"
            >
              <GridItem rowSpan={1} colSpan={5}>
                <VStack>
                  <SalesChart />
                  <HoldersChart />
                </VStack>
              </GridItem>
              <GridItem rowSpan={2} colSpan={3}>
                <Text
                  textAlign="left"
                  fontSize="l"
                  fontWeight="bold"
                  w="full"
                  pb="0.4rem"
                >
                  Listings
                </Text>
                <ListingsTable />
              </GridItem>
              <GridItem rowSpan={2} colSpan={3}>
                <Text
                  textAlign="left"
                  fontSize="l"
                  fontWeight="bold"
                  w="full"
                  pb="0.4rem"
                >
                  Sales
                </Text>
                <SalesTable />
              </GridItem>
              <GridItem rowSpan={1} colSpan={5}>
                {/* <ListingsChart /> */}
              </GridItem>
            </Grid>
          </Show>
          <Show below="lg">
            <Flex direction="column" justify="center" align="center" w="90%">
              <Box pt="1rem" w="full">
                <SalesChart />
              </Box>
              <HoldersChart />
              <Flex direction="column" justify="center" align="center" w="100%">
                <Text
                  textAlign="center"
                  fontSize="lg"
                  fontWeight="bold"
                  w="100%"
                  py="1rem"
                >
                  Listings
                </Text>
                <ListingsTable />
                <Text
                  textAlign="center"
                  fontSize="lg"
                  fontWeight="bold"
                  w="100%"
                  py="1rem"
                >
                  Sales
                </Text>
                <SalesTable />
              </Flex>
            </Flex>
          </Show>
        </>
      </Flex>
    </Layout>
  );
};

export default Terminal;
