import NavBar from "./componentes/nav/NavBar";
import CustomBanner from "./componentes/banner/CustomBanner";
import Carousell from "./componentes/carousell/Carousell";
import Tratamiento from "./componentes/tratamiento/Tratamiento";
import Tarjeta from "./componentes/tarjeta/Tarjeta";
import Footer from "./componentes/footer/Footer";

import { useState } from "react";
const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <>
      {/* onClick = pasa la funcion onClickLogin como prop a NavBar */}
      <NavBar onClick={onClickLogin} />
      <CustomBanner />
      <Carousell />
      <Tratamiento />
      <Tarjeta />
      <Footer />
    </>
  );
};

export default App;
