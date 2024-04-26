import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Error/ErrorPage";
import MainLayout from "../Components/Layout/MainLayout";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Login/Signup";
import Home from "../Pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "pricing",
        element: <div>login</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "browse",
        element: <div>browse</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <div>about</div>,
        errorElement: <ErrorPage />,
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
