import {
  posterUrl,
  nowPlayingUrl,
  topRatedUrl,
  popularUrl,
  options,
} from '../../helpers/data';
import { useFetch } from '../../hooks/useFetch';
import { TMDBDataType } from '../../types/movie';
import MovieItem from './MovieItem';
import MovieLoader from './MovieLoader';

const sectionsConfig = [
  { label: 'Now Playing', url: nowPlayingUrl },
  { label: 'Top Rated', url: topRatedUrl },
  { label: 'Popular', url: popularUrl },
];

const MovieList = () => {
  return (
    <>
      {sectionsConfig.map(({ label, url }) => {
        const { data, isLoading, isError } = useFetch<TMDBDataType>(
          url,
          { results: [] },
          options
        );

        if (isLoading) return <MovieLoader />;
        if (isError) return <p>Error loading {label}</p>;

        return (
          <article className='bg-black py-10 px-4 xs:px-0' key={label}>
            <section className='container mx-auto py-8 text-white'>
              <span className='text-yellow-600'>ONLINE STREAMING</span>
              <h2 className='text-[36px] font-bold mb-8'>{label} Movies</h2>
              <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0'>
                {data.results &&
                  data.results.map(
                    (movie: {
                      id: number;
                      title: string;
                      poster_path: string;
                      vote_average: number;
                      release_date: string;
                    }) => (
                      <MovieItem
                        key={movie.id}
                        title={movie.title}
                        imgUrl={`${posterUrl}${movie.poster_path}`}
                        starRate={movie.vote_average}
                        realeaseDate={movie.release_date}
                      />
                    )
                  )}
              </div>
            </section>
          </article>
        );
      })}
    </>
  );
};

export default MovieList;
