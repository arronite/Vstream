import { useEffect, useState } from "react";
import axios from "axios";

export const useDataProvider = (api, params) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fetch = () => {
    axios
      .get(api, {
        params: {
          params,
        },
      })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetch();
  }, []);

  const reload = () => {
    fetch();
  };

  return { data, reload, loading };
};
