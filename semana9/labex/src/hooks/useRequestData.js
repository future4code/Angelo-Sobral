import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/apiUtils";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [endpoint]);

  return data;
};
