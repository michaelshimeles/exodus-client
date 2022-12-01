import NavBar from "../../components/NavBar/NavBar";
import CollectionBio from "../../components/CollectionBio/CollectionBio";
import StatsBar from "../../components/StatsBar/StatsBar";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import SalesTable from "../../components/SalesTable/SalesTable";
import "./Terminal.scss";
import SalesChart from "../../components/SalesChart/SalesChart";

const Terminal = () => {
  return (
    <div className="terminal">
      <NavBar />
      <CollectionBio />
      <StatsBar />

      <div className="terminal__tx">
        <div className="terminal__charts">
          <SalesChart />
          {/* <SalesChart /> */}
        </div>

        <div className="terminal__cards">
          <div className="terminal__card">
            <ListingsTable />
          </div>
          <div className="terminal__card">
            <SalesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
