import Lottie from "lottie-react";
import loading from "../../assets/images/loading-2.json";
import "./LoadingComp.scss"

const LoadingComp = () => {

  return (
    <div className="loading-comp">
      <Lottie animationData={loading} autoplay={true} loop={true} />
    </div>
  );
};

export default LoadingComp;
