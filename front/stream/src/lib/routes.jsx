import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Error/ErrorPage";
import MainLayout from "../Components/Layout/MainLayout";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Login/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pricing",
        element: <div>login</div>,
      },
      {
        path: "home",
        element: <div>login</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);
