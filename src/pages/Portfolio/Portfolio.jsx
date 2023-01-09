import { Progress } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import eth from "../../assets/images/ethereum.svg";
import Card from "../../components/Card/Card";
import { ExplainerModal } from "../../components/ExplainerModal/ExplainerModal";
import Footer from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import PortfolioProfile from "../../components/PortfolioProfile/PortfolioProfile";
import PortfolioStats from "../../components/PortfolioStats/PortfolioStats";
import { ExplainerContext } from "../../context/ExplainerContext";
import { usePortfolioGrouped } from "../../hooks/usePortfolioGrouped";
import { usePortfolioStats } from "../../hooks/usePortfolioStats";
import "./Portfolio.scss";

const Portfolio = () => {
  const [clicked, setClicked] = useState(false);
  const [explainerHover] = useContext(ExplainerContext);

  const { id } = useParams();

  const { data: stats } = usePortfolioStats(id);
  const { data: groupPortfolio } = usePortfolioGrouped(id);

  if (!stats) {
    return (
      <Layout>
        <Progress size="xs" isIndeterminate />
        <NavBar />
      </Layout>
    );
  }

  if (!groupPortfolio) {
    return (
      <Layout>
        <div className="portfolio">
          <Progress size="xs" isIndeterminate />
          <NavBar />
          <PortfolioProfile
            ens={
              stats?.data?.ensName ? stats?.data.ensName : stats?.data.address
            }
            totalValue={stats?.data.portfolioStats?.totalPortfolioValue}
            scores={stats?.data?.scores}
            labels={stats?.data?.labels}
          />
          <PortfolioStats stats={stats?.data.transferCounts} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="portfolio">
        <NavBar />
        <PortfolioProfile
          ens={stats?.data?.ensName ? stats?.data.ensName : stats?.data.address}
          totalValue={stats?.data.portfolioStats?.totalPortfolioValue}
          scores={stats?.data?.scores}
          labels={stats?.data?.labels}
        />
        <PortfolioStats stats={stats?.data.transferCounts} />
        {explainerHover.show && <ExplainerModal info={explainerHover.info} />}
        {
          <div className="portfolio__pie">
            {groupPortfolio ? (
              groupPortfolio?.data?.collections.map((collection, index) => {
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
              <Progress size="xs" isIndeterminate />
            )}
          </div>
        }
        <Footer />
      </div>
    </Layout>
  );
};

export default Portfolio;
