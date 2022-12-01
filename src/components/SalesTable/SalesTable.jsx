import SalesCard from "../../components/SalesCard/SalesCard";
import "./SalesTable.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import eth from "../../assets/images/eth.svg";
import ping from "../../utils/ping";

const SalesTable = () => {
  const [salesCards, setSalesCards] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/sales/${id}`;

  useEffect(() => {
      ping(`${URL}`, setSalesCards);
      ping(`${URL}`, setSalesCards, 5000);
  }, []);

  return (
    <div className="sales-table">
      {salesCards ? (
        salesCards.map((sales, index) => {
          return (
            <SalesCard
              image={sales.image || eth}
              price={sales.priceInEth}
              orderSource={sales.orderSource}
              tokenId={sales.tokenId}
              key={index}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default SalesTable;
