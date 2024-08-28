import { useFetch } from '../../hooks/useFetch';

const FetchBasic = () => {
  const { data, isLoading, isError, error } = useFetch(
    'http://localhost:3000',
    null
  );

  return (
    <>
      <h1>FetchBasic Component</h1>
      {isError && <h1>에러 발생: {error}</h1>}
      {isLoading ? (
        <h1>Loading..</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
};

export default FetchBasic;
