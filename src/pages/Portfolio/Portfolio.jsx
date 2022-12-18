import NavBar from "../../components/NavBar/NavBar";
import PortfolioProfile from "../../components/PortfolioProfile/PortfolioProfile";
import "./Portfolio.scss";
import PortfolioStats from "../../components/PortfolioStats/PortfolioStats";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import eth from "../../assets/images/ethereum.svg";
import LoadingComp from "../../components/LoadingComp/LoadingComp";
import UserActivity from "../../components/UserActivity/UserActivity"

const Portfolio = () => {
  const [stats, setStats] = useState(null);
  const [collections, setCollections] = useState(null);
  const [groupPortfolio, setGroupPortfolio] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [txLog, setTxLog] = useState(null);
  const [txClicked, setTxClicked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/portfolio/wallet/${id}`)
      .then((response) => {
        setStats(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_URL}/portfolio/collections/${id}`)
      .then((response) => {
        setCollections(response.data.nfts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/portfolio/grouped/${id}`)
      .then((response) => {
        setGroupPortfolio(response.data.collections);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, clicked]);

  if (txClicked) {
    axios
      .get(`${process.env.REACT_APP_URL}/owner/activity/${id}`)
      .then((response) => {
        setTxLog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!stats) {
    return (
      <div className="portfolio">
        <NavBar />
        <LoadingComp />
      </div>
    );
  }

  return (
    <div className="portfolio">
      <NavBar />
      <PortfolioProfile
        ens={stats?.ensName ? stats.ensName : stats.address}
        totalValue={stats.portfolioStats?.totalPortfolioValue}
        scores={stats?.scores}
        labels={stats?.labels}
      />
      <PortfolioStats stats={stats.transferCounts} />
      <div className="portfolio__button">
        <button
          onClick={() => {
            setTxClicked(!txClicked);
            console.log(txLog);
          }}
        >
          {txClicked ? "📊 Portfolio" : "🧾 Tx Log"}
        </button>
      </div>
      <div className="portfolio__button">
        {!txClicked ? (
          <button
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {clicked ? "📑 Not Grouped" : "🗂️ Grouped"}
          </button>
        ) : (
          <></>
        )}
      </div>
      {!txClicked ? (
        <div className="portfolio__pie">
          {clicked ? (
            collections ? (
              collections.map((collection, index) => {
                return (
                  <Card
                    key={index}
                    name={collection?.metadata?.name}
                    image={collection?.cached_file_url}
                    tokenId={collection?.token_id}
                    address={collection?.contract_address}
                  />
                );
              })
            ) : (
              <div className="portfolio__pie-loading">
                <Loading />
              </div>
            )
          ) : groupPortfolio ? (
            groupPortfolio.map((collection, index) => {
              return (
                <Card
                  key={index}
                  name={collection?.collection?.name}
                  image={
                    collection?.collection?.image
                      ? collection?.collection?.image
                      : eth
                  }
                  floorAskPrice={collection?.collection?.floorAskPrice}
                  floorSale={collection?.collection?.floorSale?.["1day"]}
                  volume={collection?.collection?.volume?.["1day"]}
                  liquidCount={collection?.collection?.ownership?.liquidCount}
                  tokenCount={collection?.ownership?.tokenCount}
                  address={collection?.collection?.id}
                  clicked={clicked}
                  setClicked={setClicked}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <UserActivity />
      )}
      <Footer />
    </div>
  );
};

export default Portfolio;
