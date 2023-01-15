import {
  Button,
  Flex,
  Hide,
  HStack,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroSection from "../../components/HeroSection/HeroSection";
import { Layout } from "../../components/Layout/Layout";
import "./Homepage.scss";

const Homepage = () => {
  window.scrollTo(0, 0);

  return (
    <Layout>
      <Flex justify="center" align="center" h="60vh">
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          gap="2rem"
          pt="4rem"
        >
          <Hide below="md">
            <Tag size="lg" variant="solid" colorScheme="twitter" p="0.75rem">
              <Text fontSize="0.8rem" textAlign={["center", ""]}>
                This platform is in early beta. Please report any bugs you may
                experience 🐞
              </Text>
            </Tag>
          </Hide>
          <Flex>
            <HeroSection />
          </Flex>
          <VStack>
            <Text fontWeight="bold">Connect with me</Text>
            <HStack>
              <Link
                isExternal
                href="https://github.com/michaelshimeles"
                _hover={{ textDecoration: "none" }}
              >
                <Button colorScheme="facebook" leftIcon={<FaGithub />}>
                  Github
                </Button>
              </Link>

              <Link
                isExternal
                href="https://www.linkedin.com/in/michaelshimeles/"
                _hover={{ textDecoration: "none" }}
              >
                <Button colorScheme="facebook" leftIcon={<FaLinkedin />}>
                  LinkedIn
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Homepage;
