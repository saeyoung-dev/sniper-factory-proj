import { useFetch } from '../../hooks/useFetch';
import { nowPlayingUrl, options } from '../../helpers/data';

const FetchBasic = () => {
  const {
    data: { results: nowPlayingData },
    isLoading: nowPlayingIsLoading,
    isError: nowPlayingIsError,
  } = useFetch(nowPlayingUrl, [], options);

  if (nowPlayingIsLoading) return <div>로딩중</div>;
  if (nowPlayingIsError) return <div>에러 발생</div>;

  return (
    <>
      <h1>Now Playing</h1>
      <ul>
        {nowPlayingData &&
          nowPlayingData.map((movie: { title: string }) => (
            <li>{movie.title}</li>
          ))}
      </ul>
    </>
  );
};

export default FetchBasic;
