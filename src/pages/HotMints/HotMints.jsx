import HotMintsTitle from "../../components/HotMintsTitle/HotMintsTitle";
import NavBar from "../../components/NavBar/NavBar";
import HotMintsCard from "../../components/HotMintsCard/HotMintsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HotMints.scss";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";

const HotMints = () => {
  const [hotMints, setHotMints] = useState(null);
  const [time, setTime] = useState("5m");

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_URL}/hotmints`, {
        time: time,
      })
      .then((response) => {
        setHotMints(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [time]);

  const clicked = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="hotmints">
      <NavBar />
      <div className="hotmints__container">
        <HotMintsTitle />
        <div className="hotmints__cards">
          <form className="hotmints__form" onChange={clicked}>
            <select id="time" className="hotmints__select">
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
            </select>
          </form>
          <div className="hotmints__card">
            {hotMints ? (
              hotMints.top_mint_collection_items.map((mint, index) => {
                return (
                  <HotMintsCard
                    key={index}
                    name={mint.collection_name}
                    url={mint.contract_url}
                    mint_num={mint.mint_num}
                    volume={mint.mint_volume.value}
                    minter_num={mint.minter_num}
                    whale_num={mint.whale_num}
                    fomo={mint.fomo}
                    contract_address={mint.contract_address}
                    time={time}
                  />
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotMints;
