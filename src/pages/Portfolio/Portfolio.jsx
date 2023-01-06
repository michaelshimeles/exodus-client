import NavBar from "../../components/NavBar/NavBar";
import PortfolioProfile from "../../components/PortfolioProfile/PortfolioProfile";
import "./Portfolio.scss";
import PortfolioStats from "../../components/PortfolioStats/PortfolioStats";
import { useParams } from "react-router-dom";
import { Fragment, useState, useContext } from "react";
import Card from "../../components/Card/Card";
// import Footer from "../../components/Footer/Footer";
import eth from "../../assets/images/ethereum.svg";
import UserActivity from "../../components/UserActivity/UserActivity";
import { usePortfolioStats } from "../../hooks/usePortfolioStats";
import { usePortfolioCollection } from "../../hooks/usePortfolioCollection";
import { usePortfolioGrouped } from "../../hooks/usePortfolioGrouped";
import { useTransactionLog } from "../../hooks/useTransactionLog";
import { ExplainerContext } from "../../context/ExplainerContext";
import { ExplainerModal } from "../../components/ExplainerModal/ExplainerModal";
import { Layout } from "../../components/Layout/Layout";
import { Progress } from "@chakra-ui/react";

const Portfolio = () => {
  const [clicked, setClicked] = useState(false);
  const [txClicked, setTxClicked] = useState(false);
  const [explainerHover] = useContext(ExplainerContext);

  const { id } = useParams();

  const { data: stats } = usePortfolioStats(id);
  const { data: collections } = usePortfolioCollection(id);
  const { data: groupPortfolio } = usePortfolioGrouped(id);
  const { data: txLog } = useTransactionLog(id);

  // console.log("isFetching", isFetching);
  // console.log("isFetching Next Page", isFetchingNextPage);

  if (!stats) {
    return (
      <Layout>
        <Progress size="xs" isIndeterminate />
        <NavBar />
      </Layout>
    );
  }

  if (!collections) {
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
        <div className="portfolio__button">
          <button
            onClick={() => {
              setTxClicked(!txClicked);
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
        {explainerHover.show ? (
          <ExplainerModal info={explainerHover.info} />
        ) : (
          <></>
        )}
        {!txClicked ? (
          <div className="portfolio__pie">
            {clicked ? (
              collections?.pages ? (
                collections?.pages?.map((collection, index) => {
                  return (
                    <Fragment key={index}>
                      {collection?.data?.nfts?.map((item, i) => {
                        return (
                          <Card
                            key={i}
                            name={item?.metadata?.name}
                            image={item?.cached_file_url}
                            tokenId={item?.token_id}
                            address={item?.contract_address}
                          />
                        );
                      })}
                    </Fragment>
                  );
                })
              ) : (
                <div className="portfolio__pie-loading">
                  <Progress size="xs" isIndeterminate />
                </div>
              )
            ) : groupPortfolio ? (
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
            {/* {clicked ? (
            <button onClick={fetchNextPage} disabled={!hasNextPage}>
              Load More
            </button>
          ) : (
            <></>
          )}
          <div>{isFetching && !isFetchingNextPage ? <LoadingComp /> : ""}</div> */}
          </div>
        ) : (
          <div className="portfolio__activity">
            {[...txLog?.data?.activities].reverse().map((info, index) => {
              return (
                <UserActivity
                  key={index}
                  type={info.type}
                  fromAddress={info.fromAddress}
                  toAddress={info.toAddress}
                  price={info.price}
                  timestamp={info.timestamp}
                  amount={info.amount}
                  contract={info.contract}
                  tokenImage={info.token.tokenImage}
                  tokenName={info.token.tokenName}
                  collectionId={info.collection.collectionId}
                  txHash={info.txHash}
                  myAddress={id}
                />
              );
            })}
          </div>
        )}
        {/* <Footer /> */}
      </div>
    </Layout>
  );
};

export default Portfolio;
