import "./Loading.scss";
import Lottie from "lottie-react";
import loading from "../../assets/images/loading-plane.json";

const Loading = () => {

  return (
    <div>
      <Lottie animationData={loading} autoplay={true} loop={true} height={400} width={400} />
    </div>
  );
};

export default Loading;
