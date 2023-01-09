import HotMintsTitle from "../../components/HotMintsTitle/HotMintsTitle";
import NavBar from "../../components/NavBar/NavBar";
import HotMintsCard from "../../components/HotMintsCard/HotMintsCard";
import { useState } from "react";
import "./HotMints.scss";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import { useHotMints } from "../../hooks/useHotMints";
import { Layout } from "../../components/Layout/Layout";
import { Select, Flex } from "@chakra-ui/react";

const HotMints = () => {
  const [time, setTime] = useState("5m");

  const { data: hotMints, refetch } = useHotMints(time);

  const clicked = (event) => {
    setTime(event.target.value);
  };

  return (
    <Layout>
      <div className="hotmints">
        <NavBar />
        <div className="hotmints__container">
          <HotMintsTitle />
          <div className="hotmints__cards">
            <form
              className="hotmints__form"
              onChange={clicked}
              onClick={refetch}
            >
              <Select id="time">
                <option id="time" value="5m">
                  5m
                </option>
                <option id="time" value="10m">
                  10m
                </option>
                <option id="time" value="15m">
                  15m
                </option>
                <option id="time" value="30m">
                  30m
                </option>
                <option id="time" value="1h">
                  1h
                </option>
                <option id="time" value="6h">
                  6h
                </option>
                <option id="time" value="12h">
                  12h
                </option>
                <option id="time" value="24h">
                  24h
                </option>
                <option id="time" value="7d">
                  7d
                </option>
                <option id="time" value="30d">
                  30d
                </option>
              </Select>
            </form>
            <Flex justify="center" align="center" flexWrap="wrap" pb="3rem">
              <div className="hotmints__card">
                {hotMints ? (
                  hotMints?.data?.top_mint_collection_items.map(
                    (mint, index) => {
                      return (
                        <HotMintsCard
                          key={index}
                          name={mint?.collection_name}
                          url={mint?.contract_url}
                          mint_num={mint?.mint_num}
                          volume={mint?.mint_volume?.value}
                          minter_num={mint?.minter_num}
                          whale_num={mint?.whale_num}
                          fomo={mint?.fomo}
                          contract_address={mint?.contract_address}
                          time={time}
                        />
                      );
                    }
                  )
                ) : (
                  <Loading />
                )}
              </div>
            </Flex>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default HotMints;
