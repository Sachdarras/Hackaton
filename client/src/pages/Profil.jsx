import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Profil() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />;
    </>
  );
}

export default Profil;
