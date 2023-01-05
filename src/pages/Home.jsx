import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Api } from 'Api/Api';
import { Link, useLocation } from 'react-router-dom';

const ListItem = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
  line-height: 0.8;
`;

const FilmLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin: 0px;
  padding: 0px;
  color: inherit;

  &: hover {
    color: green;
    font-weight: bold;
  }
`;

const Home = () => {
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    Api().then(data => {
      setList(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {list.map(el => {
          return (
            <ListItem key={el.id}>
              <FilmLink to={`movies/${el.id}`} state={location}>
                {el.title ?? el.name}
              </FilmLink>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
