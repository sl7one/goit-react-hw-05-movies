import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MetaInfoFilm = () => {
  return (
    <Wrapper>
      <Link to="cast">Casts</Link>
      <Link to="reviews">Reviews</Link>
    </Wrapper>
  );
};

export default MetaInfoFilm;
