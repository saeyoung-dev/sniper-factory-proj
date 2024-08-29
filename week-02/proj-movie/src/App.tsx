// import Header from './components/movie-basic/Header';
// import Main from './components/movie-basic/Main';
// import MovieList from './components/movie-basic/MovieList';
import ErrorHandle from './components/error/ErrorHandle';
import Error from './components/error/ErrorHandle';

export default function App() {
  return (
    <>
      {/* <Header />
      <Main />
      <MovieList /> */}
      <ErrorHandle fallback={<h1>error</h1>}>
        <Error />
      </ErrorHandle>
    </>
  );
}
