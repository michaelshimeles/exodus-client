import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Footer.scss";
const Footer = () => {
  const [price, setPrice] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/gas`)
      .then((response) => {
        setPrice(response.data.data.priceUSD);
      })
      .catch((error) => {
        console.log("Gas error", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/metrics`)
      .then((response) => {
        setSentiment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="footer">
      <div className="footer__container">
        <p>🚀 meet Exodus</p>
        <div
          className="footer__price"
          onMouseEnter={() => {
            setHover(!hover);
          }}
          onMouseLeave={() => {
            setHover(!hover);
          }}
        >
          <p>
            {hover ? (
              <div className="footer__popup">
                <p>
                  The Market Sentiment Index is a number ranging from 1 to 100,
                  <br />
                  which indicates the amount of interest the market has for
                  NFTs.
                  <br /> 
                  ❄️ (between 1 and 40)
                  <br />
                  🌫️ (between 40 and 60)
                  <br />
                  🔥 (between 60 and 100)
                </p>
              </div>
            ) : (
              <></>
            )}
            <span className="footer__market">Market Sentiment: </span>{" "}
            {sentiment?.market_sentiment?.score > 60
              ? "🔥"
              : sentiment?.market_sentiment?.score < 60 &&
                sentiment?.market_sentiment?.score > 40
              ? "🌫️"
              : "❄️"}{" "}
            {sentiment ? sentiment.market_sentiment?.score : ""}
          </p>
          <p className="footer__price-text">
            ${price} <span className="footer__price-currency">USD/ETH</span>
          </p>
          <span className="blink_me"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
