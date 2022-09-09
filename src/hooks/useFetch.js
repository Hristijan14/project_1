import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (() => {
      try {
        fetch(`${url}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url]);

  return data;
};

export default useFetch;
