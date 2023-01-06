import "./Card.scss";
import {
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import ethImage from "../../assets/images/eth.svg"; 

const Card = ({
  name,
  image,
  tokenId,
  address,
  tokenCount,
  clicked,
  setClicked,
  volume,
  floorAskPrice,
  floorSale,
}) => {
  return (
    <Link
      as={ReachLink}
      to={"/collection/" + address}
      _hover={{ textDecoration: "none" }}
    >
      <Center py={12} w="18rem">
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            {image ? (
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={image}
              />
            ) : (
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={ethImage}
              />
            )}
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {name ? name : "Name can't be found"}
            </Text>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              maxW="15ch"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {tokenId || "Own " + tokenCount}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              {clicked === undefined ? (
                <Text fontWeight={800} fontSize={"xl"}>
                  {volume > 0 && floorSale ? floorSale + " ETH" : "💩"}
                </Text>
              ) : (
                <Text fontWeight={800} fontSize={"xl"}>
                  {volume > 0 && floorSale ? floorSale + " Ξ" : "💩"}{" "}
                </Text>
              )}
            </Stack>
          </Stack>
        </Box>
      </Center>
      {/* <div className="card__container">
        <div className="card__image">
          <img src={image} alt="NFT" />
        </div>
        <div className="card__info">
          <div className="card__title">
            <h1>{name}</h1>
            <p>{tokenId || "Own " + tokenCount}</p>
          </div>
          <div className="card__price">
            {clicked === undefined ? (
              <h2>{volume > 0 && floorSale ? floorSale + " ETH" : "💩"}</h2>
            ) : (
              <h2>{volume > 0 && floorSale ? floorSale + " Ξ" : "💩"} </h2>
            )}
          </div>
        </div>
      </div> */}
    </Link>
  );
};

export default Card;
