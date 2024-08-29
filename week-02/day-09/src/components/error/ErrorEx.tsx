import { useEffect, useState } from "react";

const ErrorEx = () => {
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts2");
        if (!res.ok) {
          throw new Error("Ok Error!");
        }
      } catch (error) {
        // setIsError(true);
        throw new Error("catch Error!");
      }
    };
    fetchData();
  }, []);

  if (isError) {
    throw new Error("Outside Error!");
  }

  return (
    <>
      <h1>Component</h1>
    </>
  );
};
export default ErrorEx;
