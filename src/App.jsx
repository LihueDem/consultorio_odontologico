import "./styles/index.css";
import NavBar from "./componentes/nav/NavBar";
import CustomBanner from "./componentes/banner/CustomBanner";
import Carousell from "./componentes/carousell/Carousell";
import ExpandableCard from "./componentes/expandableCard/ExpandableCard";
import Tarjeta from "./componentes/tarjeta/Tarjeta";
import QrCode from "./componentes/qr/QrCode";
import Footer from "./componentes/footer/Footer";
//import Error from "./componentes/error/Error";
import { useState } from "react";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <>
      <NavBar onClick={onClickLogin} />
      <CustomBanner />
      <Carousell />
      <ExpandableCard />
      <Tarjeta />
      <QrCode />
      <Footer />

      {/* <Error /> */}
    </>
  );
};

export default App;
