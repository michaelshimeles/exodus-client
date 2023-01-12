import { Flex, Image, Text, Button, useColorModeValue } from "@chakra-ui/react";
// import { NftSwapV4 } from "@traderxyz/nft-swap-sdk";
// import { createClient, configureChains, mainnet, useSigner } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";

const ListingsCard = ({
  image,
  tokenName,
  price,
  status,
  createdTime,
  tokenId,
  address,
}) => {
  let currentTime = new Date().toUTCString().split(" ")[4].split(":");
  let newCreatedTime = createdTime.split("T")[1].split(".")[0].split(":");
  let minute = Number(currentTime[1]) - Number(newCreatedTime[1]);

  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "whiteAlpha.50");

  // const alchemyId = process.env.REACT_APP_ALCHEMY_ID;

  // const { chains, provider } = configureChains(
  //   [mainnet],
  //   [alchemyProvider({ apiKey: alchemyId })]
  // );

  // const nftSwapSdk = new NftSwapV4(provider, signer, chains);

  // const { data: signer, isError, isLoading } = useSigner();

  // const getOrders = async () => {
  //   const orders = await nftSwapSdk.getOrders({
  //     nftToken: address,
  //     nftTokenId: tokenId,
  //     chainId: "1",
  //   });
  //   const foundOrder = orders[0];

  //   await nftSwapSdk.fillSignedOrder(foundOrder.order);
  // };

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
                {String(tokenName)}
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center" align="center" gap="1rem">
            <Text fontSize="0.7rem">
              {minute < 1 ? "< 1 min" : minute + " min"}{" "}
            </Text>
            <Flex>
              <Text fontSize="0.875rem">Ξ{String(price)}</Text>
            </Flex>
            <Flex>
              <Button
                fontSize="0.875rem"
                px="0.65rem"
                py="1rem"
                borderRadius="7px"
                border="2px"
                borderColor="lightblue"
                // onClick={() => getOrders}
              >
                Buy
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListingsCard;
