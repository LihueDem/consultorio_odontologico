//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./componentes/nav/NavBar";
import CustomBanner from "./componentes/banner/CustomBanner";
import Carousell from "./componentes/carousell/Carousell";
//import Tratamiento from "./componentes/tratamiento/Tratamiento";
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
