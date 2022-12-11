import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import TopCollections from "../../components/TopCollections/TopCollections";
import "./Homepage.scss";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const Homepage = () => {
  window.scrollTo(0, 0);
  const [clicked, setClicked] = useState(false);

  const click = (answer) => {
    console.log(answer)
    setClicked(answer)
  }
  return (
    <div className="homepage" onClick={() => click(true || clicked)}>
      <NavBar clicked={clicked} setClicked={click}/>
      <HeroSection />
      <TopCollections />
      <Footer />
    </div>
  );
};

export default Homepage;
