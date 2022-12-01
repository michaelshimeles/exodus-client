import NavBar from "../../components/NavBar/NavBar";
import CollectionBio from "../../components/CollectionBio/CollectionBio";
import StatsBar from "../../components/StatsBar/StatsBar";
import ListingsCard from "../../components/ListingsCard/ListingsCard";
import SalesCard from "../../components/SalesCard/SalesCard";

import "./Terminal.scss"
const Terminal = () => {
  return (
    <div className="terminal">
      <NavBar />
      <CollectionBio />
      <StatsBar />
      <div className="terminal__tx">
        <ListingsCard />
        <SalesCard />
      </div>
    </div>
  );
};

export default Terminal;
