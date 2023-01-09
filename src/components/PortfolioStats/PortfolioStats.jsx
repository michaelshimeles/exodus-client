import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
const PortfolioStats = ({ stats }) => {
  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "whiteAlpha.50");

  return (
    <Flex justify="center" align="center" w="100%">
      <Flex
        justify="space-around"
        align="center"
        w="80%"
        py="0.8rem"
        border="1px"
        borderColor={borderColor}
        bgColor={bgColor}
      >
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Flips</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.flips}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Mint</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.mints}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Profitable Flips</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.profitableFlips}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Buy</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.purchases}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Sales</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.sales}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Transfer In</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.transfersIn}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="0.3rem">
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">Transfer Out</Text>
            </Flex>
            <Flex justify="center" align="center">
              <Text fontSize="0.75rem">{stats && stats.transfersOut}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PortfolioStats;
