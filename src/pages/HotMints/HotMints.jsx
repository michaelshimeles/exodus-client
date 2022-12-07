import HotMintsTitle from "../../components/HotMintsTitle/HotMintsTitle";
import NavBar from "../../components/NavBar/NavBar";
import HotMintsCard from "../../components/HotMintsCard/HotMintsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HotMints.scss";
import Loading from "../../components/Loading/Loading";

const HotMints = () => {
  const [hotMints, setHotMints] = useState(null);
  const [time, setTime] = useState("5m");
  const URL = "http://localhost:8080/hotmints";

  useEffect(() => {
    axios
      .post(URL, {
        time: time,
      })
      .then((response) => {
        setHotMints(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [time]);

  const clicked = (event) => {
    console.log(event.target.value);
    setTime(event.target.value);
  };

  return (
    <div className="hotmints">
      <NavBar />
      <div className="hotmints__container">
        <HotMintsTitle />
        <form onChange={clicked}>
          <select id="time">
            <option id="time" value="5m">
              5m
            </option>
            <option id="time" value="10m">
              10m
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
          {hotMints
            ? hotMints.top_mint_collection_items.map((mint, index) => {
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
                    address={mint.contract_address}
                  />
                );
              })
            : <Loading />}
        </div>
      </div>
    </div>
  );
};

export default HotMints;
