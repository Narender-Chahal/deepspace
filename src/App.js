import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Faq from "./components/Faq";
import LastSection from "./components/LastSection";

function App() {
  return (
    <>
      <Roadmap />
      <Team />
      <Faq />
      <LastSection />
    </>
  );
}

export default App;
