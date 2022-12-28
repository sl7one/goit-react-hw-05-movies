import { ApiName } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
`;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [params, setParams] = useSearchParams();
  const parametr = params.get('searchQuery');
  const location = useLocation();

  const onSubmit = event => {
    event.preventDefault();
    setParams({ searchQuery: value });
  };

  const onChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!parametr) return;
    ApiName(parametr).then(data => {
      setData(data.results);
    });
  }, [parametr]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          value={value}
          onChange={onChange}
          required
        ></input>
        <button type="submit">Search</button>
      </form>

      <ul>
        {data.map(el => {
          return (
            <StyledLi key={el.id}>
              <Link
                to={`${el.id}`}
                state={{ location: location.pathname + location.search }}
              >
                {el.original_title}
              </Link>
            </StyledLi>
          );
        })}
      </ul>
    </>
  );
};

export default SearchBar;
