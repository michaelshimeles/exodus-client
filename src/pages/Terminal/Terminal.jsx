import NavBar from "../../components/NavBar/NavBar";
import CollectionBio from "../../components/CollectionBio/CollectionBio";
import StatsBar from "../../components/StatsBar/StatsBar";
import ListingsCard from "../../components/ListingsCard/ListingsCard";
import SalesCard from "../../components/SalesCard/SalesCard";

import "./Terminal.scss";
import SalesChart from "../../components/SalesChart/SalesChart";
const Terminal = () => {
  return (
    <div className="terminal">
      <NavBar />
      <CollectionBio />
      <StatsBar />
      <div className="terminal__tx">
        <SalesChart />
        <div className="terminal__cards">
          <ListingsCard />
        </div>
        <div className="terminal__cards">
          <SalesCard />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
