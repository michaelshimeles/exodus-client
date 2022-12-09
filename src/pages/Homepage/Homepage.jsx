import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import TopCollections from "../../components/TopCollections/TopCollections";
import "./Homepage.scss";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="homepage">
      <NavBar />
      <HeroSection />
      <TopCollections />
      <Footer />
    </div>
  );
};

export default Homepage;
