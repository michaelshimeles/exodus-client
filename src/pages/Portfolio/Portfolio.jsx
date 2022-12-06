import NavBar from "../../components/NavBar/NavBar";
import PortfolioProfile from "../../components/PortfolioProfile/PortfolioProfile";
import "./Portfolio.scss";
import PortfolioStats from "../../components/PortfolioStats/PortfolioStats";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import PortfolioPie from "../../components/PortfolioPie/PortfolioPie";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";

const Portfolio = () => {
  const [stats, setStats] = useState(null);
  const [collections, setCollections] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/wallet/${id}`;
  const URL2 = `http://localhost:8080/collections/${id}`;

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      setStats(response.data);
    });

    axios.get(`${URL2}`).then((response) => {
      setCollections(response.data);
    });
  }, []);

  if (!stats) {
    return (
      <div className="portfolio">
        <NavBar />
        <Loading />
      </div>
    );
  }

  return (
    <div className="portfolio">
      <NavBar />
      <PortfolioProfile
        ens={stats.ensName}
        totalValue={stats.portfolioStats.totalPortfolioValue}
        scores={stats.scores}
      />
      <PortfolioStats stats={stats.transferCounts} />

      <div className="portfolio__pie">
        {/* <PortfolioPie collectibles={stats.collectibles} /> */}

        {collections ? (
          collections.nfts.map((collection) => {
            return (
              <Card
                name={collection.metadata.name}
                image={collection.cached_file_url}
                tokenId={collection.token_id}
                // floorPrice={getFloorPrice(collection.contract_address)}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

  // const URL3 = `http://localhost:8080/floorprice`;

  // const getFloorPrice = (contract) => {
  //   return axios
  //     .post(`${URL3}`, {
  //       address: contract,
  //     })
  //     .then((response) => {
  //       console.log(response.data.data.price);
  //       return response.data.data.price;
  //     })
  //     .catch((error) => {
  //       console.log("Broken");
  //       return error;
  //     });
  // };

