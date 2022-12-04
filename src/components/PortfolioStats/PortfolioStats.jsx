import "./PortfolioStats.scss";

const PortfolioStats = ({ stats }) => {

  return (
    <div className="portfolio-stats">
      <div className="portfolio-stats__container">
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Flips</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.flips : ""}</p>
          </div>
        </div>
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Mint</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.mints : ""}</p>
          </div>
        </div>
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Profitable Flips</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.profitableFlips : ""}</p>
          </div>
        </div>
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Buy</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.purchases : ""}</p>
          </div>
        </div>
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Sales</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.sales : ""}</p>
          </div>
        </div>
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Transfer In</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.transfersIn : ""}</p>
          </div>
        </div>
        <div className="portfolio-stats__info">
          <div className="portfolio-stats__title">
            <p>Transfer Out</p>
          </div>
          <div div className="portfolio-stats__stat">
            <p>{stats ? stats.transfersOut : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStats;
