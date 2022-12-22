import { useParams } from "react-router-dom";
import axios from "axios";
import eth from "../../assets/images/ethereum.svg";
import "./CollectionBio.scss";
import LoadingComp from "../LoadingComp/LoadingComp";
import verified from "../../assets/images/verified.svg.png";
import { TiArrowForward } from "react-icons/ti";
import { useQuery } from "react-query";

const CollectionBio = () => {

  const { id } = useParams();

  const fetchBioStats = () => {
    return axios.get(`${process.env.REACT_APP_URL}/info/${id}`);
  };

  const { data: bioStats, isLoading } = useQuery("bio-stats", fetchBioStats, {
    cacheTime: 0, // no caching
  });

  if (isLoading) {
    return <LoadingComp />;
  }

  return (
    <div className="collection">
      <div className="collection-container">
        <div className="collection__profile">
          <img
            src={bioStats?.data?.images?.image_url || eth}
            alt="Collection Profile"
            className="collection__img"
          />
        </div>
        <div className="collection__info">
          <div className="collection__name">
            <p>{bioStats ? bioStats?.data?.name : ""}</p>
            <div className="collection__name-stats">
              {bioStats.verified === true ? (
                <img src={verified} alt="Verified badge" />
              ) : (
                <></>
              )}
              <a
                href={bioStats?.data?.socials?.external_url}
                className="collection__name-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiArrowForward />
              </a>
            </div>
          </div>
          <div className="collection__link">
            <div className="collection__site">
              <p>
                Holders:{" "}
                {bioStats?.data?.stats?.holders
                  ? bioStats?.data?.stats?.holders
                  : ""}
              </p>
            </div>
            <div className="collection__social">
              <p>
                Supply:{" "}
                {bioStats?.data?.stats?.totalSupply
                  ? bioStats?.data?.stats?.totalSupply
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBio;
