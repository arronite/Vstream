import { useEffect, useState } from "react";
import "./App.css";
import { router } from "./lib/routes";
import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setData } from "./redux/features/userDataSlice";
import { Loading } from "./Components/general/Loading";

function App() {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

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
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading full={true}></Loading>;

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
