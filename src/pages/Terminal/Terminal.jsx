import NavBar from "../../components/NavBar/NavBar";
import CollectionBio from "../../components/CollectionBio/CollectionBio";
import StatsBar from "../../components/StatsBar/StatsBar";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import SalesTable from "../../components/SalesTable/SalesTable";
import "./Terminal.scss";
import SalesChart from "../../components/SalesChart/SalesChart";
import ListingsChart from "../../components/ListingsChart/ListingsChart";
import HoldersChart from "../../components/HoldersChart/HoldersChart";
import { useState } from "react";
import FloorChart from "../../components/FloorChart/FloorChart";

const Terminal = () => {
  const [clicked, setClicked] = useState(true);
  window.scrollTo(0, 0);

  return (
    <div className="terminal">
      <NavBar />
      <CollectionBio />
      <StatsBar />
      <div className="terminal__button">
        <button
          onClick={() => {
            console.log("Clicked");
            setClicked(!clicked);
          }}
        >
          More
        </button>
      </div>

      {clicked ? (
        <div className="terminal__tx">
          <div className="terminal__charts">
            <p>Sales Chart</p>
            <SalesChart />
            <p>Listings Distribution</p>
            <ListingsChart />
          </div>
          <div className="terminal__cards">
            <div className="terminal__card">
              <div className="terminal__card-title">
                <p>Listings</p>
                <div className="terminal__card-sort">
                  <p>Price</p>
                  <span className="blink_me"></span>
                </div>
              </div>
              <ListingsTable />
            </div>
            <div className="terminal__card">
              <div className="terminal__card-title">
                <p>Sales</p>
                <span className="blink_me"></span>
              </div>
              <SalesTable />
            </div>
          </div>
        </div>
      ) : (
        <div className="terminal__other">
          <div className="terminal__holders">
            <HoldersChart />
            <FloorChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;
