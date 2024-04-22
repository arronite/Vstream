import { navigationItems } from "./navigationItems";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  if (window.location.pathname === "/") {
    window.location.pathname = "/home";
  }

  return (
    <div>
      <div className="glass">
        <div className="mainContainer  py-5 grid grid-cols-8 gap-4">
          {navigationItems.map((parent) => (
            <div key={parent.key} className={`${parent.containerStyle}`}>
              {parent.items.map((item) => (
                <a
                  href={item.url}
                  key={item.key}
                  className={`${parent.ChildrenStyle}`}
                >
                  {item.content}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
