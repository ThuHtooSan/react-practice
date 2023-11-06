import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const errorController = () => {
    setError(null);
  }

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error(res.status);

      const fetchedData = await res.json();
      setData(fetchedData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData(url)
    }, 1000);
  }, [url]);

  return { data, isPending, error, errorController };
}

export default useFetch;