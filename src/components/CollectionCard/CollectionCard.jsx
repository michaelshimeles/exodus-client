import "./CollectionCard.scss";
import eth from "../../assets/images/ethereum.svg";
import { useFloorPrice } from "../../hooks/useTrending";
import { useListingsStats } from "../../hooks/useListingsStats";
import { useSalesStats } from "../../hooks/useSalesStats";

const CollectionCard = ({
  name,
  image,
  floorPrice,
  supply,
  sales,
  volume,
  change,
  topColClicked,
  nameTrending,
  imageTrending,
  totalEthTrending,
  addressTrending,
  timeTrending,
}) => {
  const { data: floor } = useFloorPrice(addressTrending);

  const { data: listingStats } = useListingsStats(
    addressTrending,
    timeTrending?.includes("h")
      ? timeTrending?.split("h")[0]
      : timeTrending?.split("m")[0]
  );

  const { data: salesStats } = useSalesStats(
    addressTrending,
    timeTrending?.split("m")[0]
  );

  const momentum = (sales, listings) => {
    if (sales === listings && sales === 0) {
      return "No Volume";
    } else if (sales > listings) {
      return "Bullish";
    } else if (sales === listings && sales > 0) {
      return "Pot. Reversal";
    } else if (sales < listings) {
      return "Bearish";
    }

    return "Calculating..";
  };

  return (
    <div className="collection-cards">
      {topColClicked ? (
        <div className="collection-cards__container">
          <div className="collection-cards__item collection-cards__item-name">
            <img
              className="collection-cards__img"
              src={image}
              alt="Collection profile"
            />
            <p className="collection-cards__text">{name}</p>
          </div>
          <div className="collection-cards__item">
            <p>{floorPrice}</p>
          </div>
          <div className="collection-cards__item">
            <p>{supply}</p>
          </div>
          <div className="collection-cards__item">
            <p>{sales}</p>
          </div>
          <div className="collection-cards__item">
            <p>{volume}</p>
          </div>
          <div className="collection-cards__item">
            <p>{Math.round(change * 100)}%</p>
          </div>
        </div>
      ) : (
        <div className="collection-cards__container">
          <div className="collection-cards__item collection-cards__item-name">
            <img
              className="collection-cards__img"
              src={imageTrending ? imageTrending : eth}
              alt="Collection profile"
            />
            <p className="collection-cards__text">{nameTrending}</p>
          </div>
          <div className="collection-cards__item">
            <p>{floor?.data?.sources[0]?.floorAskPrice}</p>
          </div>
          <div className="collection-cards__item">
            <p>{totalEthTrending}</p>
          </div>
          <div className="collection-cards__item">
            <p>{listingStats?.data?.orders.length}</p>
          </div>
          <div className="collection-cards__item">
            <p>{salesStats?.data?.sales.length}</p>
          </div>
          <div className="collection-cards__item">
            <p>
              {momentum(
                salesStats?.data?.sales.length,
                listingStats?.data?.orders.length
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionCard;
