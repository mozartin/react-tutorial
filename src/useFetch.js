import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortConst.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data for that result");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          if(error.name === "AbortError") {
            console.log("fetch aborted");
          }
          setIsPending(false);
          setError(error.message);
        });
    }, 1000);
    return () => abortConst.abort();
  }, [url]);

  return { data: data, isPending: isPending, error: error };
};

export default useFetch;
