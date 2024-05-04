import { useEffect } from "react";
import "./App.css";
import { router } from "./lib/routes";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setData } from "./redux/features/userDataSlice";

function App() {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5892/user/data", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const userData = res.data;
        dispatch(setData(userData));
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
