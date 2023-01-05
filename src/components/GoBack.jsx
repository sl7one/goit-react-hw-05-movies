import { Link, useLocation } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const GoBack = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px;
`;

const HomeBtn = ({ loc }) => {
  const location = useLocation();

  return (
    <GoBack to={loc?.state ?? '/'}>
      <BsFillArrowLeftCircleFill /> Go back
    </GoBack>
  );
};

export default HomeBtn;
