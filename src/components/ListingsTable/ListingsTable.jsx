import ListingsCard from "../ListingsCard/ListingsCard";
import "./ListingsTable.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eth from "../../assets/images/ethereum.svg";
import ping from "../../utils/ping";
import Loading from "../Loading/Loading";

const ListingsTable = () => {
  const [listingsCard, setListingsCard] = useState(null);
  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/listings/${id}`;

  useEffect(() => {
    ping(`${URL}`, setListingsCard);
    ping(`${URL}`, setListingsCard, 10000);
  }, [URL]);

  return (
    <div className="listings-table">
      {listingsCard ? (
        listingsCard.data.orders.map((listing, index) => {
          return (
            <ListingsCard
              className="listings-table__card"
              createdTime={listing.createdAt}
              status={listing.status}
              orderKind={listing.kind}
              updatedTime={listing.updatedTime}
              image={listing.metadata.data.image || eth}
              key={index}
              tokenName={listing.metadata.data.tokenName || ""}
              price={`${listing.price.amount.decimal}` || ""}
            />
          );
        })
      ) : (
        <Loading />
      )}

      {/* {listingsCard && sorted ? (
        listingsCard.data.orders.map((listing, index) => {
          return (
            <ListingsCard
              className="listings-table__card"
              createdTime={listing.createdAt}
              status={listing.status}
              orderKind={listing.kind}
              updatedTime={listing.updatedTime}
              image={listing.metadata.data.image || eth}
              key={index}
              tokenName={listing.metadata.data.tokenName || ""}
              price={`${listing.price.amount.decimal}` || ""}
            />
          );
        })
      ) : (
        <Loading />
      )} */}
    </div>
  );
};

export default ListingsTable;
