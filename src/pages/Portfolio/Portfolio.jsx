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

  const WALLET = `${process.env.REACT_APP_URL}/wallet/${id}`;
  const COLLECTIONS = `${process.env.REACT_APP_URL}/collections/${id}`;

  useEffect(() => {
    axios.get(WALLET).then((response) => {
      setStats(response.data);
    });

    axios
      .get(COLLECTIONS)
      .then((response) => {
        // newCollections = response.data.nfts;
        setCollections(response.data.nfts);
        // setContinuation(response.data.continuation);
        // return response.data.continuation;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // const [continuation, setContinuation] = useState(null);

  // let newCollections = [];

  // .then((response) => {
  //    console.log(response)
  //   return axios
  //     .get(COLLECTIONS, {
  //       "continuation": response,
  //     })
  //     .then((response) => {
  //       // console.log("New", ...[...newCollections], ...response.data.nfts)
  //       setCollections([...[...collections], ...response.data.nfts]);
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }).catch((error) => {
  //   console.log(error)
  // })

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
        ens={stats?.ensName}
        totalValue={stats.portfolioStats?.totalPortfolioValue}
        scores={stats?.scores}
        labels={stats?.labels}
      />
      <PortfolioStats stats={stats.transferCounts} />

      <div className="portfolio__pie">
        {/* <PortfolioPie collectibles={stats.collectibles} /> */}
        {collections ? (
          collections.map((collection, index) => {
            console.log(collections);
            return (
              <Card
                key={index}
                name={collection.metadata?.name}
                image={collection?.cached_file_url}
                tokenId={collection?.token_id}
                address={collection?.contract_address}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
