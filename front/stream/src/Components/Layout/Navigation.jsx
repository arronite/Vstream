import { LoggedIn } from "./LoggedIn";

import { useSelector } from "react-redux";

const Navigation = () => {
  const token = useSelector((state) => state.userData.data);
  const login = token
    ? {
        key: 3,
        section: "login",
        containerStyle: "col-span-2 flex items-center justify-end",

        items: [
          {
            key: "login",
            content: <LoggedIn />,
            url: "/login",
          },
        ],
      }
    : {
        key: 3,
        section: "login",
        containerStyle: "col-span-2 flex justify-end",
        ChildrenStyle: "bg-cyan-700 px-4 py-2 rounded-md text-cyan-100 ",
        items: [
          {
            key: "login",
            content: "Login",
            url: "/login",
          },
        ],
      };
  const navigationItems = [
    {
      key: 1,
      section: "logo",
      containerStyle: "col-span-2",
      ChildrenStyle: "",
      items: [
        {
          key: 1,
          content: "Logo",
          url: "/home",
        },
      ],
    },
    {
      key: 2,
      section: "controls",
      containerStyle: "col-span-4 justify-center justify-around flex",
      ChildrenStyle: "px-2 py-1 text-cyan-100",
      items: [
        {
          key: 1,
          content: "Browse",
          url: "/browse",
        },
        {
          key: 2,
          content: "About",
          url: "/about",
        },
        {
          key: 3,
          content: "Pricing",
          url: "/pricing",
        },
      ],
    },
    login,
  ];

  return (
    <div className="glass sticky top-0 z-10">
      <div className="mainContainer mx-01  py-5 grid grid-cols-8 gap-4">
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
  );
};

export default Navigation;
