import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import Casts from './Movies/Casts';
// import Reviews from './Movies/Reviews';
// import SearchBar from './Movies/SearcBar';
import Navigations from './Navigations';

const Container = styled.div`
  font-size: 40px;
  color: #010101;
`;

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const SearchBar = lazy(() => import('./SearcBar'));
const Casts = lazy(() => import('./Casts'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Navigations />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<SearchBar />} />
            <Route path="/movies/:movieId" element={<Movies />}>
              <Route path="cast" element={<Casts />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
