import HeroSection from "../../components/HeroSection/HeroSection";
import { Layout } from "../../components/Layout/Layout";
import "./Homepage.scss";

const Homepage = () => {
  window.scrollTo(0, 0);

  return (
    <Layout>
      <div className="homepage">
        <div className="homepage__container">
          <HeroSection />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
