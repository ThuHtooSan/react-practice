import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // replace local json server url with JSON Placeholder server url
  // in production build
  if (process.env.NODE_ENV === 'production') {
    url = url.replace(/http:\/\/localhost:8000/, 'https://my-json-server.typicode.com/thuhtoosan/react-practice');
  }

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
    fetchData(url);
  }, [url]);

  return { data, isPending, error, errorController };
}

export default useFetch;