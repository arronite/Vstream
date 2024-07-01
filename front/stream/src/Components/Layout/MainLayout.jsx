import Navigation from "./Navigation";
import { Footer } from "../general/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  if (window.location.pathname === "/") {
    window.location.pathname = "/home";
  }

  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
