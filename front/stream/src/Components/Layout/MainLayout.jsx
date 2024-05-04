import Navigation from "./Navigation";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  if (window.location.pathname === "/") {
    window.location.pathname = "/home";
  }

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
