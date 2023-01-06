import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import verified from "../../assets/images/verified.svg.png";
import { useBioStats } from "../../hooks/useBioStats";
import {
  Progress,
  Flex,
  Image,
  Badge,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";

const CollectionBio = () => {
  const { id } = useParams();

  const { data: bioStats, isLoading } = useBioStats(id);

  if (isLoading) {
    return <Progress size="xs" isIndeterminate />;
  }

  return (
    <Flex w="85%">
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
  );
};

export default CollectionBio;
