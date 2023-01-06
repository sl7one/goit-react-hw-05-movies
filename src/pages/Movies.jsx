import styled from 'styled-components';

import { ApiId } from 'Api/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MetaInfoFilm from '../components/MetaInfoFilm';
import HomeBtn from '../components/GoBack';

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
    ApiId(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) return null;

  const url = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : `https://m.media-amazon.com/images/M/MV5BMjM5MTc3NDU4NV5BMl5BanBnXkFtZTgwMTkxMjk3MjE@._V1_.jpg`;

  return (
    <>
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
    </>
  );
};

export default Movies;
