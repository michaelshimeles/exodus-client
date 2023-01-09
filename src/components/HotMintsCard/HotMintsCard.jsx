import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center, Image,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";
import ethImage from "../../assets/images/eth.svg";

const HotMintsCard = ({
  name,
  url,
  mint_num,
  minter_num,
  whale_num,
  fomo,
  volume,
  contract_address,
  time,
}) => {
  const [mintDetails, setMintDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/info/resevoir/` + contract_address)
      .then((response) => {
        setMintDetails(response.data.data.collections[0]);
      });
  }, [time, contract_address]);

  const bgColor = useColorModeValue("white", "#141821");

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"295px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        bgColor={bgColor}
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
            backgroundImage: `url(${mintDetails?.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          {mintDetails?.image ? (
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={mintDetails?.image}
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
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {name ? name : "Name can't be found"}
          </Text>
          <Text pb="0.5rem" textDecoration={"line-through"} color={"gray.600"}>
            {fomo === "HIGH" ? (
              <Badge colorScheme="green">HIGH</Badge>
            ) : fomo === "MEDIUM" ? (
              <Badge colorScheme="yellow">MEDIUM</Badge>
            ) : fomo === "LOW" ? (
              <Badge colorScheme="red">LOW</Badge>
            ) : fomo === "NONE" ? (
              <Badge colorScheme="red">DEAD</Badge>
            ) : (
              fomo
            )}
          </Text>
          <ButtonGroup spacing="2">
            <Link href={url} _hover={{ textDecoration: "none" }}>
              <Button varianst="solid" colorScheme="blue">
                Mint
              </Button>
            </Link>
            <Link
              as={ReachLink}
              to={"/collection/" + contract_address}
              _hover={{ textDecoration: "none" }}
            >
              <Button variant="ghost" colorScheme="blue">
                Data
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      </Box>
    </Center>
  );
};

export default HotMintsCard;
