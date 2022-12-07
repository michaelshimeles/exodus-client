import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Footer.scss";
const Footer = () => {
  const [price, setPrice] = useState("");

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

  console.log(price);

  return (
    <div className="footer">
      <div className="footer__container">
        <p>🚀 meet Exodus</p>
        <div className="footer__price">
          <p className="footer___price-text">${price} <span className="footer__price-currency">USD/ETH</span></p>
          <span className="blink_me"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
