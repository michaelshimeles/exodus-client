import NavBar from "../../components/NavBar/NavBar";
import PortfolioProfile from "../../components/PortfolioProfile/PortfolioProfile";
import "./Portfolio.scss";
import PortfolioStats from "../../components/PortfolioStats/PortfolioStats";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PortfolioPie from "../../components/PortfolioPie/PortfolioPie";
import Loading from "../../components/Loading/Loading";

const Portfolio = () => {
  const [stats, setStats] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/wallet/${id}`;

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      setStats(response.data);
      console.log(response.data);
    });
  }, []);

  if (!stats) {
    return <Loading />
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
        <PortfolioPie collectibles={stats.collectibles} />
      </div>
    </div>
  );
};

export default Portfolio;
