import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Error/ErrorPage";
import MainLayout from "../Components/Layout/MainLayout";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Login/Signup";
import Home from "../Pages/home/Home";
import { VideoPage } from "../Pages/video/VideoPage";
import About from "../Pages/About/About";
import { Genre } from "../Pages/genre/Genre";
import { GenrePanel } from "../Pages/home/components/GenrePanel";
import { Container } from "../Components/general/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "video/:videoId",
        element: <VideoPage />,
      },
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
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/genres/:id",
        element: <Genre />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/genres",
        element: <Genre />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/genreSelection",
        element: (
          <Container>
            <GenrePanel />
          </Container>
        ),
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
