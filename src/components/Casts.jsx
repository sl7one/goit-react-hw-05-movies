import { ApiCasts } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Casts = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    ApiCasts(Number(movieId)).then(data => {
      setCasts(data);
    });
  }, [movieId]);

  if (!casts) return null;

  return (
    <ul>
      {casts.cast.map(el => {
        const url = el.profile_path
          ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
          : `https://mod.go.ke/wp-content/uploads/2021/04/default-profile-pic.png`;
        return (
          <li key={el.id}>
            <img src={url} alt={el.name} width={200} />
            <h2>Artist : {el.name}</h2>
            <p>Character : {el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Casts;
