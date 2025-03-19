import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIspending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong");
        }
        const data = await req.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message)
      } finally {
        setIspending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isPending };
};
