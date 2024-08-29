export const nowPlayingUrl =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const popularUrl =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const topRatedUrl =
  'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const posterUrl = 'https://image.tmdb.org/t/p/w500/';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjBjNDI1MTJiMWM5NmVlOGNhNGIyNzdjYzYzZDRlNCIsIm5iZiI6MTcyNDgzMjg1My41OTExNiwic3ViIjoiNjZjZWExNmFmNWJlMmFiZTY3NDAxMjIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3O7zgWRknwq9AZdf7RXzBaOdfK2hs9H-vzVDkEjOdkk',
  },
};
