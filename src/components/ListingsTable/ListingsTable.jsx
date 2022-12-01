import ListingsCard from "../ListingsCard/ListingsCard";
import "./ListingsTable.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import eth from "../../assets/images/ethereum.svg";

const ListingsTable = () => {
  const [listingsCard, setListingsCard] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/listings/${id}`;

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      setListingsCard(response.data.data.orders);
      console.log(response.data.data.orders);
    });
  }, []);

  return (
    <div className="listings-table">
      {listingsCard ? (
        listingsCard.map((listing, index) => {
          return (
            <ListingsCard image={listing.metadata.data.image || eth} key={index} tokenName={listing.metadata.data.tokenName || ""} price={listing.price.amount.decimal || ""}/>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListingsTable;
