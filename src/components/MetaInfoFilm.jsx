import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MetaInfoFilm = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Link to="cast" state={location.state}>
        Casts
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </Wrapper>
  );
};

export default MetaInfoFilm;
