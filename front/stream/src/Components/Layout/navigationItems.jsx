export const navigationItems = [
  {
    key: 1,
    section: "logo",
    containerStyle: "col-span-2",
    ChildrenStyle: "",
    items: [
      {
        key: 1,

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
        content: "Genre",
        url: "/Genres",
      },
    ],
  },
];
