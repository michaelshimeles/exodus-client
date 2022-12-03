import SalesCard from "../../components/SalesCard/SalesCard";
import "./SalesTable.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eth from "../../assets/images/eth.svg";
import ping from "../../utils/ping";
import Loading from "../Loading/Loading";

const SalesTable = () => {
  const [salesCards, setSalesCards] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/sales/${id}`;

  useEffect(() => {
      ping(`${URL}`, setSalesCards);
      ping(`${URL}`, setSalesCards, 10000);
  }, [URL]);

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
        <Loading />
      )}
    </div>
  );
};

export default SalesTable;
