import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
const SalesCard = ({ image, price, orderSource, tokenId }) => {
  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "whiteAlpha.50");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100%"
      border="0.8rem"
      borderColor={borderColor}
      borderRadius="7px"
      bgColor={bgColor}
      onClick={onOpen}
      cursor="pointer"
    >
      <Flex
        justify="flex-start"
        align="center"
        w="100%"
        borderRadius="5px"
        height="56px"
      >
        <Image
          src={image}
          alt="Listed NFT"
          w="4rem"
          borderTopLeftRadius="5px"
          borderBottomLeftRadius="5px"
          height="56px"
        />
        <Flex justify="space-between" align="center" w="100%" px="0.5rem">
          <Flex justify="center" align="center" gap="1rem">
            <Flex>
              <Text
                fontSize="0.875rem"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                maxW="100px"
              >
                #{tokenId}
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center" align="center" gap="1rem">
            <Text fontSize="0.7rem">{orderSource}</Text>
            <Flex>
              <Text fontSize="0.875rem">Ξ{price}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} bgColor={bgColor}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Token ID: {tokenId}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image w="50%" src={image} rounded="md" />
          </ModalBody>
          <ModalFooter>
            <Flex
              fontWeight="bold"
              justify="space-between"
              align="center"
              w="100%"
            >
              <Text>{orderSource}</Text>
              <Text fontWeight="bold">Sold: {price} ETH</Text>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SalesCard;
