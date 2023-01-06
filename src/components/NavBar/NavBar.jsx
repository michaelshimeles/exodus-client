import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Hide,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show
} from "@chakra-ui/react";
import axios from "axios";
import { ConnectKitButton } from "connectkit";
import { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Link as ReactLink } from "react-router-dom";
import { useAccount } from "wagmi";
import logo from "../../assets/logo/logo.png";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import theme from "../../theme";
import "./NavBar.scss";

const NavBar = () => {
  const { address } = useAccount();
  /*eslint-disable no-unused-vars*/
  const [addressState, setAddressState] = useState(address);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const URL = process.env.REACT_APP_URL;

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
    >
      <Flex justifyContent="space-between" alignItems="center" w="90%">
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
            <Flex
              justify="center"
              align="center"
            >
              <Input
                placeholder="Search..."
                w="100%"
                onChange={handleSearch}
                onClick={handleSearch}
              />
              <Flex
                direction="column"
                justify="center"
                align="center"
                position="fixed"
                w="5rem"
                pt="18rem"
              >
                {result !== "" ? (
                  result.collections.map((search, index) => {
                    console.log("search", search);
                    return (
                      <Link
                        onClick={() => {
                          setResult("");
                          setSearch("");
                        }}
                        as={ReactLink}
                        to={"/collection/" + search?.contract}
                      >
                        <></>
                      </Link>
                    );
                  })
                ) : (
                  <></>
                )}
              </Flex>
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
              <ConnectKitButton />
            </Flex>
          </Hide>
          <Show below="lg">
            <ConnectKitButton />
            <Menu>
              <MenuButton as={Button}>
                <HamburgerIcon boxSize={6} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link
                    as={ReactLink}
                    to="/hotmints"
                    fontWeight="bold"
                    _hover={{ textDecoration: "none" }}
                  >
                    🔥 Hot Mints
                  </Link>
                </MenuItem>
                <MenuItem>
                  {addressState ? (
                    <Link
                      as={ReactLink}
                      to={`/portfolio/${address}`}
                      fontWeight="bold"
                      _hover={{ textDecoration: "none" }}
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
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
          <ColorModeSwitcher theme={theme} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
