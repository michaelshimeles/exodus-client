import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
export const ExplainerModal = ({ info }) => {
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const bgColor = useColorModeValue("black", "blackAlpha.500");
  const textColor = useColorModeValue("white", "white");

  return (
    <Flex justify="center" align="center">
      <Flex
        justify="center"
        align="center"
        position="absolute"
        py="1.5rem"
        px="3rem"
        border="1px"
        borderColor={borderColor}
        bgColor={bgColor}
        textColor={textColor}
      >
        <Flex
          justify="center"
          align="center"
          className="explainer-modal__title"
        >
          <Text fontWeight="bold">
            {info.includes("🦐")
              ? "Shrimp means you don't own any NFTs of value. They all most likely went to $0 😂"
              : info.includes("🐟")
              ? "Fish means you hold some NFTs but nothing of serious value"
              : info.includes("🐬")
              ? "You hold some valuable NFTs"
              : info.includes("🦈")
              ? "You have quiet the valuable the collection"
              : info.includes("🐳")
              ? "You hold a lot of valuable NFTs"
              : ""}

            {info.includes("👋")
              ? "Normie Hands 😂"
              : info.includes("🐣")
              ? "New baby"
              : info.includes("📜")
              ? "Sells quick"
              : ""}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
