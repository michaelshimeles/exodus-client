import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import TopCollections from "../../components/TopCollections/TopCollections";
import "./Homepage.scss";
import Footer from "../../components/Footer/Footer";
import { Layout } from "../../components/Layout/Layout";

const Homepage = () => {
  window.scrollTo(0, 0);

  return (
    <Layout>
      <div className="homepage">
        <div className="homepage__container">
          <NavBar />
          <HeroSection />
          <TopCollections />
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
