import NavBar from "./componentes/nav/NavBar";
import CustomBanner from "./componentes/banner/CustomBanner";
import CustomNewSection from "./componentes/section/CustomNewSection";
import Footer from "./componentes/Footer";
import "./styles/index.css";
import "./styles/features.css";

const App = () => {
  return (
    <>
      <NavBar />
      <CustomBanner />
      <CustomNewSection />
      <CustomNewSection />
      <Footer />
    </>
  );
};

export default App;
