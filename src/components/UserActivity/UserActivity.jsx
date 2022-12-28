import "./UserActivity.scss";
import { useState } from "react";
import eth from "../../assets/images/ethereum.svg";

const UserActivity = ({
  type,
  fromAddress,
  toAddress,
  price,
  timestamp,
  amount,
  contract,
  tokenImage,
  tokenName,
  collectionId,
  txHash,
  myAddress,
}) => {
  const [clicked, setClicked] = useState(false);

  const typeFunc = (type, from, to, address) => {
    if (type === "transfer") {
      return "transfer";
    } else if (address.toLowerCase() === from) {
      return "buy";
    } else if (address.toLowerCase() === to) {
      return "sell";
    }
    return;
  };

  return (
    <div className="user-activity">
      {typeFunc(type, fromAddress, toAddress, myAddress) !== "transfer" ? (
        <div
          className="user-activity__container"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <div className="user-activity__info">
            <div className="user-activity__action">
              <div className="user-activity__img-type">
                {tokenImage !== null ? (
                  <img src={tokenImage} alt="Token" />
                ) : (
                  <img src={eth} alt="Token" />
                )}
                <p>{typeFunc(type, fromAddress, toAddress, myAddress)}</p>
              </div>
              <p className="user-activity__time">
                {new Date(timestamp * 1000).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p>{price} ETH</p>
            </div>
            <a
              className="user-activity__txhash"
              href={"https://etherscan.io/tx/" + txHash}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>txhash:</p>
              <p className="user-activity__txhash-text">{txHash}</p>
            </a>
          </div>
          {clicked ? (
            <div className="user-activity__info">
              <div className="user-activity__action">
                <p className="user-activity__contract">contract: {contract}</p>
              </div>
              <div>
                <p className="user-activity__from">from: {fromAddress}</p>
              </div>
              <div>
                <p className="user-activity__to">to: {toAddress}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserActivity;
