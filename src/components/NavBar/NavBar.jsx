import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { Flex, Hide, Image, Input, Link, Show } from "@chakra-ui/react";
import axios from "axios";
import { ConnectKitButton } from "connectkit";
import { useEffect, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Link as ReactLink } from "react-router-dom";
import { useAccount } from "wagmi";
import logo from "../../assets/logo/logo.png";
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
            <Input
              placeholder="Search..."
              w="100%"
              onChange={handleSearch}
              onClick={handleSearch}
            />
          </Hide>
        </Flex>
        <Flex gap="2rem">
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
              <Link
                as={ReactLink}
                to={`/portfolio/${address}`}
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
              >
                📊 Portfolio
              </Link>
              <ConnectKitButton />
            </Flex>
          </Hide>
          <Show below="md">
            <Search2Icon boxSize={6} />
            <HamburgerIcon boxSize={6} />
          </Show>
        </Flex>
      </Flex>
    </Flex>

    //         <div className="navbar__results">
    //           {result !== "" ? (
    //             result.collections.map((search, index) => {
    //               return (
    //                 <Link
    //                   key={search?.collectionId}
    //                   className="navbar__link"
    //                   onClick={() => {
    //                     setResult("");
    //                     setSearch("");
    //                   }}
    //                   to={"/collection/" + search?.contract}
    //                 >
    //                   <div className="navbar__image">
    //                     <img src={search?.image} alt="Search result" />
    //                     <p className="navbar__result">{search?.name}</p>
    //                   </div>
    //                   <div>
    //                     {search?.openseaVerificationStatus === "verified" ? (
    //                       <p>✅</p>
    //                     ) : (
    //                       <p>🔵</p>
    //                     )}
    //                   </div>
    //                 </Link>
    //               );
    //             })
    //           ) : (
    //             <></>
    //           )}
    //         </div>
  );
};

export default NavBar;
