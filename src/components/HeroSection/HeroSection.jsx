import { Flex, Heading, Text, Button, Image, Link, Hide } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Hero from "../../assets/images/hero2.png";
const HeroSection = () => {
  // const { colorMode } = useColorMode();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      justify="center"
      gap="1rem"
      py="2rem"
    >
      <Flex justify="center" align="center" w="100%">
        <Flex justify="space-between" align="center" w="80%">
          <Flex direction="column" justify="flex-start" w="100%" gap="1rem">
            <Text
              fontSize="xl"
              fontWeight="extrabold"
              bgGradient="linear-gradient(175deg, rgba(105, 234, 203, 1), rgba(234, 204, 248, 1), rgba(102, 84, 241, 1))"
              bgClip="text"
              bgSize="100%"
            >
              meet Exodus
            </Text>
            <Heading fontWeight="extrabold" fontSize={["4xl", "4rem"]}>
              The Ultimate NFT Toolkit
            </Heading>
            <Text fontSize={["sm", "md"]}>
              Track, analyze, and trade like a pro with Pluto - the all-in-one
              NFT analytics platform. Get real-time trade alerts and stay ahead
              of the game with our cutting-edge technology. Unlock the full
              potential with Pluto - the ultimate tool for any NFT Pros.
            </Text>
            <Flex justify="flex-start" align="center" w="100%" gap="1rem">
              <Link
                as={ReachLink}
                to="/hotmints"
                _hover={{ textDecoration: "none" }}
                w={["50", "30%"]}
              >
                <Button variant="outline" h="3rem" w="100%">
                  Hot Mints
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Hide below="lg">
            <Flex justify="center" align="center" w="100%" mt="3rem">
              <Image src={Hero} w="30rem" />
            </Flex>
          </Hide>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
