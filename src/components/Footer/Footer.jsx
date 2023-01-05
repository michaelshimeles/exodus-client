import { InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Show,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

import "./Footer.scss";
const Footer = () => {
  const [hover, setHover] = useState(false);

  const fetchGas = () => {
    return axios.get(`${process.env.REACT_APP_URL}/gas`);
  };

  const fetchMetrics = () => {
    return axios.get(`${process.env.REACT_APP_URL}/metrics`);
  };

  const { data: price } = useQuery("gas", fetchGas);
  const { data: sentiment } = useQuery("metrics", fetchMetrics);

  return (
    <Flex
      w="full"
      bgColor="black"
      justifyContent="space-evenly"
      alignItems="center"
      px="3rem"
      h="4rem"
      borderTop="2px"
      borderColor="blue.700"
    >
      <Flex w="95%" justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">🚀 meet Exodus</Text>
        <Flex
          onMouseEnter={() => {
            setHover(!hover);
          }}
          onMouseLeave={() => {
            setHover(!hover);
          }}
          justifyContent="center"
          alignItems="center"
          gap="1.5rem"
        >
          <Show above="md">
            <Flex justifyContent="center" alignItems="center" gap="1rem">
              <Popover>
                <PopoverTrigger>
                  <IconButton
                    aria-label="Search database"
                    icon={<InfoIcon />}
                    size="sm"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    <Text>
                      The Market Sentiment Index is a number ranging from 1 to
                      100 which indicates the amount of interest the market has
                      for NFTs.
                    </Text>
                    <Text>❄️ (between 1 and 40)</Text>
                    <Text>🌫️ (between 40 and 60)</Text>
                    <Text>🔥 (between 60 and 100)</Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Text fontSize="sm" fontWeight="bold">
                Market Sentiment:{" "}
                {sentiment ? sentiment?.data?.market_sentiment?.score : ""}{" "}
                {sentiment?.market_sentiment?.score > 60
                  ? "🔥"
                  : sentiment?.data?.market_sentiment?.score < 60 &&
                    sentiment?.data?.market_sentiment?.score > 40
                  ? "🌫️"
                  : "❄️"}
              </Text>
            </Flex>
          </Show>
          <Show below="md">
            <Text>
              {sentiment?.market_sentiment?.score > 60
                ? "🔥"
                : sentiment?.data?.market_sentiment?.score < 60 &&
                  sentiment?.data?.market_sentiment?.score > 40
                ? "🌫️"
                : "❄️"}{" "}
              {sentiment ? sentiment?.data?.market_sentiment?.score : ""}
            </Text>
          </Show>
          <Text>${price?.data?.data?.priceUSD}</Text>
        </Flex>
      </Flex>
    </Flex>
    // <div className="footer">
    //   <div className="footer__container">
    //     <p>🚀 meet Exodus</p>
    //     <div
    //       className="footer__price"
    // onMouseEnter={() => {
    //   setHover(!hover);
    // }}
    // onMouseLeave={() => {
    //   setHover(!hover);
    // }}
    //     >
    //       <p>
    //         {hover ? (
    //           <div className="footer__popup">
    //             <p>
    //               The Market Sentiment Index is a number ranging from 1 to 100,
    //               <br />
    //               which indicates the amount of interest the market has for
    //               NFTs.
    //               <br />
    //               <br />
    //               ❄️ (between 1 and 40)
    //               <br />
    //               🌫️ (between 40 and 60)
    //               <br />
    //               🔥 (between 60 and 100)
    //             </p>
    //           </div>
    //         ) : (
    //           <></>
    //         )}
    //         <span className="footer__market">Market Sentiment: </span>{" "}
    //         {sentiment?.market_sentiment?.score > 60
    //           ? "🔥"
    //           : sentiment?.data?.market_sentiment?.score < 60 &&
    //             sentiment?.data?.market_sentiment?.score > 40
    //           ? "🌫️"
    //           : "❄️"}{" "}
    //         {sentiment ? sentiment?.data?.market_sentiment?.score : ""}
    //       </p>
    //       <p className="footer__price-text">
    //         ${price?.data?.data?.priceUSD}{" "}
    //         <span className="footer__price-currency">USD/ETH</span>
    //       </p>
    //       <span className="blink_me"></span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
