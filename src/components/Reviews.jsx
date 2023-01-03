import { ApiReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    ApiReviews(Number(movieId)).then(data => {
      setReviews(data);
    });
  }, [movieId]);

  if (!reviews) return null;

  return reviews.total_results ? (
    <ul>
      {reviews.results.map(el => {
        // console.log(el);
        return (
          <li key={el.id}>
            <h2>Author : {el.author}</h2>
            <p>Content : {el.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    'Not Found'
  );
};

export default Reviews;
