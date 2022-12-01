import ListingsCard from "../ListingsCard/ListingsCard";
import "./ListingsTable.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eth from "../../assets/images/eth.svg";
import ping from "../../utils/ping";

const ListingsTable = () => {
  const [listingsCard, setListingsCard] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/listings/${id}`;

  useEffect(() => {
    ping(`${URL}`, setListingsCard);
    ping(`${URL}`, setListingsCard, 5000);
  }, []);

  return (
    <div className="listings-table">
      {listingsCard ? (
        listingsCard.data.orders.map((listing, index) => {
          return (
            <ListingsCard
              className="listings-table__card"
              image={listing.metadata.data.image || eth}
              key={index}
              tokenName={listing.metadata.data.tokenName || ""}
              price={`${listing.price.amount.decimal}` || ""}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListingsTable;
