import { useEffect, useState } from "react";

const useFetchPower = (url, params) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (() => {
      try {
        fetch(`${url}${params}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url, params]);

  return data;
};

export default useFetchPower;
