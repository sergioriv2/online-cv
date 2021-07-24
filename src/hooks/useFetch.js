import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRequest = {
          method: "GET",
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(url, dataRequest);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
