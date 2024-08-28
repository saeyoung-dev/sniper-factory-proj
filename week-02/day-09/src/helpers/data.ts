export const nowPlayingUrl =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const options = {
  method: 'GET',
  header: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjBjNDI1MTJiMWM5NmVlOGNhNGIyNzdjYzYzZDRlNCIsIm5iZiI6MTcyNDgzMjg1My41OTExNiwic3ViIjoiNjZjZWExNmFmNWJlMmFiZTY3NDAxMjIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3O7zgWRknwq9AZdf7RXzBaOdfK2hs9H-vzVDkEjOdkk',
  },
};
