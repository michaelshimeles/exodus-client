import { Flex, Heading, Text } from "@chakra-ui/react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      justify="center"
      gap="1rem"
      py="2rem"
    >
      <Heading
        size="4xl"
        bgGradient="linear-gradient(45deg, rgba(105, 234, 203, 1), rgba(234, 204, 248, 1), rgba(102, 84, 241, 1))"
        bgClip="text"
        fontSize={["5xl","7xl"]}
        fontWeight="extrabold"
        bgSize="100%"

      >
        meet Exodus
      </Heading>
      <Text textAlign={"center"} px="1rem">
        Your favorite NFT toolkit. Analyze, Trade, & Track all in one platform
      </Text>
    </Flex>
  );
};

export default HeroSection;
