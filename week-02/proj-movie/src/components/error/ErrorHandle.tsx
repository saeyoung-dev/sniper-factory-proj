import { useEffect, useState } from 'react';

const ErrorHandle = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error('error');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isError) {
    throw new Error('Outside');
  }

  return (
    <>
      <h1>Error Component</h1>
      {data && data.map((item) => <h1>item.title</h1>)}
    </>
  );
};

export default ErrorHandle;
