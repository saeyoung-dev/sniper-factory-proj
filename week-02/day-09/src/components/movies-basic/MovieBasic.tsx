import {
  NowPlayingUrl,
  options,
  PopularUrl,
  UpcomingUrl,
} from "../../api/tmdb";
import { useFetch } from "../../hooks/useFetch";
import { TMDBDataType } from "../../types/movie";
import ErrorBoundary from "../error/ErrorBoundary";
import MovieArea from "./MovieArea";
import MovieError from "./MovieError";
import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";
import MovieSkeleton from "./MovieSkeleton";

export default function MovieBasic() {
  // nowPlaying: 현재 상영중인 영화 목록
  const {
    data: { results: nowPlaying },
    isLoading: isNowPlayingLoading,
    isError: isNowPlayingError,
  } = useFetch<TMDBDataType>("dddd", { results: [] }, options);

  // popular: 현재 인기있는 영화 목록
  const {
    data: { results: popular },
    isLoading: isPopularLoading,
    isError: isPopularError,
  } = useFetch<TMDBDataType>(PopularUrl, { results: [] }, options);

  // upcoming: 현재 개봉 예정 영화 목록
  const {
    data: { results: upcoming },
    isLoading: isUpcomingLoading,
    isError: isUpcomingError,
  } = useFetch<TMDBDataType>(UpcomingUrl, { results: [] }, options);

  return (
    <>
      {/* 헤더 */}
      <MovieHeader />
      {/* 메인 */}

      <MovieMain />
      {/* 무비 에어리어 */}
      {isNowPlayingLoading ? (
        <MovieSkeleton title="Now Playing" />
      ) : (
        <ErrorBoundary fallback={<MovieError title="Now Playing" />}>
          <MovieArea
            movies={nowPlaying}
            title="Now Playing"
            isError={isNowPlayingError}
          />
        </ErrorBoundary>
      )}

      {/* 무비 에어리어 */}
      {isPopularLoading ? (
        <MovieSkeleton title="Popular" />
      ) : (
        <ErrorBoundary fallback={<MovieError title="Popular" />}>
          <MovieArea
            movies={popular}
            title="Popular"
            isError={isPopularError}
          />
        </ErrorBoundary>
      )}
      {/* 무비 에어리어 */}
      {isUpcomingLoading ? (
        <MovieSkeleton title="Upcoming" />
      ) : (
        <ErrorBoundary fallback={<MovieError title="Upcoming" />}>
          <MovieArea
            movies={upcoming}
            title="Upcoming"
            isError={isUpcomingError}
          />
        </ErrorBoundary>
      )}
    </>
  );
}
