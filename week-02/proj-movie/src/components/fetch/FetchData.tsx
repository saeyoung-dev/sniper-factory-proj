// import { useEffect, useState } from 'react';

// const FetchData = () => {
//   const [data, setData] = useState();
//   const [error, setError] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       signal,
//     }) //
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('데이터를 불러오는데 실패했습니다.');
//       })
//       .then((data) => setData(data))
//       .catch((error) => {
//         if (error.name === 'AbortError') return;
//         setError(error.message);
//         setIsError(true);
//       })
//       .finally(() => {
//         if (!signal.aborted) {
//           setIsLoading(false);
//         }
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);
// };

// export default FetchData;
