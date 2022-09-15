import { useEffect, useState } from "react";

const useFetch = (request) => {
  let [data, setdata] = useState(null);
  let [pending, setPending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(request)
        .then((resource) => {
          if (resource.ok === false) {
            throw Error("Data Not Found");
          }

          return resource.json();
         })
        .then((data) => {
          setdata(data);
          setPending(false);
        })
        .catch((error) => {
          seterror(error.message);
          setPending(false);
        });
    }, 1000);
  }, []);

  return { data, pending, error };
};

export default useFetch;
