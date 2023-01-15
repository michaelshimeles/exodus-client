import { Flex } from "@chakra-ui/react";
import { Layout } from "../../components/Layout/Layout";
import TopCollections from "../../components/TopCollections/TopCollections";

export const Collections = () => {
  return (
    <Layout>
      <Flex justify="center" align="center" pt="4rem" w="100%">
        <TopCollections />
      </Flex>
    </Layout>
  );
};
