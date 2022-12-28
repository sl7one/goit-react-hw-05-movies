import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  padding: 10px;
  box-shadow: 0px 6px 13px 1px rgba(0, 0, 0, 0.43);
  background-color: tomato;
`;

const StyledLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: inherit;

  &.active {
    color: green;
  }
`;

const Navigations = () => {
  return (
    <Nav>
      <StyledLinks to="/">Home</StyledLinks>
      <StyledLinks to="/movies">Movies</StyledLinks>
    </Nav>
  );
};

export default Navigations;
