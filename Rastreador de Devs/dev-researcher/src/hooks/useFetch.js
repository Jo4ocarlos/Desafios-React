import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [user, setUser] = useState();

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setUser(data);
  };

  return { user, fetchData };
};
