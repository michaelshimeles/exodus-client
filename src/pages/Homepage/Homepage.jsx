import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import TopCollections from "../../components/TopCollections/TopCollections";
import "./Homepage.scss"
import Footer from "../../components/Footer/Footer";

const Homepage = () => {

  
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

// for anything that recieves data from the API
// refer to https://beta.reactjs.org/apis/react/Suspense
