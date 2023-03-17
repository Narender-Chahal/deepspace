import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import NavBar from "./components/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import GamePlay from "./components/GamePlay";
import ImagesSlider from "./components/ImagesSlider";
import Faq from "./components/Faq";
import LastSection from "./components/LastSection";

function App() {
  return (
    <>
      <div className="heroImage vh_100_xl vh_65_xsm vh_65_sm vh_75_md vh_85_lg vh_95_xl  ">
        <NavBar />
        <HeroSection />
      </div>
      <AboutUs />
      <GamePlay />
      <ImagesSlider />
      <Roadmap />
      <Team />
      <Faq />
      <LastSection />
    </>
  );
}

export default App;
