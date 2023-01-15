import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  Image,
  Input,
  Link,
  Show,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";
import { ConnectKitButton } from "connectkit";
import React, { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Link as ReactLink } from "react-router-dom";
import { useAccount } from "wagmi";
import eth from "../../assets/images/ethereum.svg";
import verified from "../../assets/images/verified.svg.png";
import logo from "../../assets/logo/logo.png";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import theme from "../../theme";

const NavBar = () => {
  const { address } = useAccount();
  /*eslint-disable no-unused-vars*/
  const [addressState, setAddressState] = useState(address);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const URL = process.env.REACT_APP_URL;

  const borderColor = useColorModeValue("", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "whiteAlpha.100");

  const searchRef = useOnclickOutside(() => {
    setResult("");
  });

  useEffect(() => {
    setAddressState(address);
  }, [address]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);

    axios
      .get(`${URL}/search/${event.target.value}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex
      w="100%"
      // bgColor="blackAlpha.100"
      justifyContent="center"
      alignItems="center"
      py="0.5rem"
      direction="column"
    >
      <Flex justify="space-between" align="center" w="90%">
        <Flex
          height="4rem"
          gap="1rem"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Link to="/" as={ReactLink}>
            <Image src={logo} alt="Exodus logo" w="2.5rem" />
          </Link>
          <Hide below="lg">
            <Flex direction="column" justify="center" align="center">
              <Input
                placeholder="Search..."
                w="100%"
                onChange={handleSearch}
                onClick={handleSearch}
                ref={searchRef}
              />
            </Flex>
          </Hide>
        </Flex>
        <Flex justifyContent="center" alignItems="center" gap="2rem">
          <Hide below="lg">
            <Flex
              height="4rem"
              gap="3rem"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Link
                as={ReactLink}
                to="/collections"
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  variant="ghost"
                  rounded="none"
                  h="2.75rem"
                  w="9rem"
                  _hover={{ textDecoration: "none" }}
                >
                  🖼️ Collections
                </Button>
              </Link>
              <Link
                as={ReactLink}
                to="/hotmints"
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
              >
                <Button variant="ghost" rounded="none" h="2.75rem" w="9rem">
                  🔥 Hot Mints
                </Button>
              </Link>
              {addressState ? (
                <Link
                  as={ReactLink}
                  to={`/portfolio/${address}`}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button variant="ghost" rounded="none" h="2.75rem" w="9rem">
                    📊 Portfolio
                  </Button>
                </Link>
              ) : (
                <Link
                  as={ReactLink}
                  to={`/portfolio/${address}`}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none" }}
                  hidden={true}
                >
                  📊 Portfolio
                </Link>
              )}
              <ConnectKitButton />
            </Flex>
          </Hide>
          <Show below="lg">
            <HamburgerIcon
              boxSize={6}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <ConnectKitButton />
                </DrawerHeader>
                <DrawerBody>
                  <Flex direction="column" gap="1rem">
                    <Input
                      placeholder="Search..."
                      w="100%"
                      onChange={handleSearch}
                      onClick={handleSearch}
                      ref={searchRef}
                    />
                    <Link
                      as={ReactLink}
                      to="/hotmints"
                      fontWeight="bold"
                      _hover={{ textDecoration: "none" }}
                    >
                      🔥 Hot Mints
                    </Link>

                    {addressState ? (
                      <Link
                        as={ReactLink}
                        to={`/portfolio/${address}`}
                        fontWeight="bold"
                        _hover={{ textDecoration: "none" }}
                        ref={searchRef}
                      >
                        📊 Portfolio
                      </Link>
                    ) : (
                      <Link
                        as={ReactLink}
                        to={`/portfolio/${address}`}
                        fontWeight="bold"
                        _hover={{ textDecoration: "none" }}
                        hidden={true}
                      >
                        📊 Portfolio
                      </Link>
                    )}
                  </Flex>
                  {result ? (
                    <Flex
                      direction="column"
                      justify="center"
                      align="flex-start"
                      w="100%"
                      gap="0.5rem"
                      mt="1rem"
                      py="1rem"
                      px="0.75rem"
                      bgColor="black"
                      rounded="2xl"
                    >
                      {result !== "" ? (
                        result.collections.map((search, index) => {
                          return (
                            <Link
                              onClick={() => {
                                setResult("");
                                setSearch("");
                              }}
                              as={ReactLink}
                              to={"/collection/" + search?.contract}
                              key={index}
                              ref={searchRef}
                            >
                              <HStack justify="flex-start" w="100%">
                                <Image
                                  w="2rem"
                                  rounded="full"
                                  src={search?.image}
                                  alt="Search result"
                                />
                                <Text>{search?.name}</Text>
                                {search?.openseaVerificationStatus ===
                                "verified" ? (
                                  <Image
                                    w="1rem"
                                    src={verified}
                                    alt="verified"
                                  />
                                ) : (
                                  <></>
                                )}
                              </HStack>
                            </Link>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </Flex>
                  ) : (
                    <></>
                  )}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Show>
          <ColorModeSwitcher theme={theme} />
        </Flex>
      </Flex>
      <Flex justify="center">
        <Collapse in={result} animateOpacity>
          {result ? (
            <Flex
              justify="center"
              align="center"
              gap="5rem"
              mt="1rem"
              py="1rem"
              px="0.75rem"
              bgColor={bgColor}
              rounded="2xl"
              wrap="wrap"
            >
              {result !== "" ? (
                result.collections.map((search, index) => {
                  console.log("Result", search);
                  return (
                    <Link
                      onClick={() => {
                        setResult("");
                        setSearch("");
                      }}
                      as={ReactLink}
                      to={"/collection/" + search?.contract}
                      key={index}
                      ref={searchRef}
                      _hover={{ textDecoration: "none" }}
                    >
                      <HStack
                        justify="flex-start"
                        w="100%"
                        bgColor="whiteAlpha.200"
                        p="1rem"
                        rounded="full"
                      >
                        <Image
                          w="2rem"
                          rounded="full"
                          src={search?.image ? search?.image : eth}
                          alt="Search result"
                        />
                        <Text>{search?.name}</Text>
                        {search?.openseaVerificationStatus === "verified" ? (
                          <Image w="1rem" src={verified} alt="verified" />
                        ) : (
                          <></>
                        )}
                      </HStack>
                    </Link>
                  );
                })
              ) : (
                <></>
              )}
            </Flex>
          ) : (
            <></>
          )}
        </Collapse>
      </Flex>
    </Flex>
  );
};

export default NavBar;
