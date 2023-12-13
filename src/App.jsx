import NavBar from "./componentes/nav/NavBar";
import CustomBanner from "./componentes/banner/CustomBanner";
import CustomNewSection from "./componentes/section/CustomNewSection";
import Footer from "./componentes/Footer";
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
      <CustomNewSection isLoginUser={isLogged} />
      <Footer />
    </>
  );
};

export default App;
