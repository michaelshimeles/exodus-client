import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import TopCollections from "../../components/TopCollections/TopCollections";
import "./Homepage.scss";

const Homepage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="homepage">
      <NavBar />
      <HeroSection />
      <TopCollections />
    </div>
  );
};

export default Homepage;
