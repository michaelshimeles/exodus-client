import {
  Badge,
  Box, Flex, HStack, Image, Skeleton, Text
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import verified from "../../assets/images/verified.svg.png";
import { useBioStats } from "../../hooks/useBioStats";

const CollectionBio = () => {
  const { id } = useParams();

  const { data: bioStats } = useBioStats(id);


  return (
    <Skeleton w="90%" h="4rem" my="1rem" isLoaded={bioStats} fadeDuration={2}>
      <Flex w="90%" pt="1rem">
        <HStack>
          <Image
            w="5rem"
            rounded="full"
            src={bioStats?.data?.images?.image_url || eth}
          />
          <Box>
            <Flex justify="flex-start" align="center" gap="0.25rem">
              <Text align="left" fontSize="2.5rem" fontWeight="bold">
                {bioStats ? bioStats?.data?.name : ""}
              </Text>
              {bioStats?.data?.verified === true ? (
                <Image src={verified} w="2rem" h="2rem" mt="0.15rem" />
              ) : (
                <></>
              )}
            </Flex>

            <Flex gap="0.5rem" pb="1rem">
              <Badge colorScheme="blue">
                Holders:{" "}
                {bioStats?.data?.stats?.holders
                  ? bioStats?.data?.stats?.holders
                  : ""}
              </Badge>
              <Badge colorScheme="blue">
                Supply:{" "}
                {bioStats?.data?.stats?.totalSupply
                  ? bioStats?.data?.stats?.totalSupply
                  : ""}
              </Badge>
            </Flex>
          </Box>
        </HStack>
      </Flex>
    </Skeleton>
  );
};

export default CollectionBio;
