import styled from 'styled-components';

import { ApiId } from 'Api/Api';
import { Outlet, useParams } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import MetaInfoFilm from './MetaInfoFilm';
import HomeBtn from './GoBack';

const FilmInfo = styled.div`
  display: flex;
`;
const Meta = styled.div`
  margin-left: 20px;
`;

const Movies = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    ApiId(Number(movieId))
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) return <p>No founded films</p>;

  const url = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : `https://m.media-amazon.com/images/M/MV5BMjM5MTc3NDU4NV5BMl5BanBnXkFtZTgwMTkxMjk3MjE@._V1_.jpg`;

  console.log(movie);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeBtn />
      <FilmInfo>
        <img src={url} alt={movie.title} width={300} />
        <Meta>
          <h2>{movie.title}</h2>
          <p>User score : {`${movie.vote_average * 10} %`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(el => el.name).join(', ')}</p>
        </Meta>
      </FilmInfo>
      <MetaInfoFilm />
      <Outlet />
    </Suspense>
  );
};

export default Movies;