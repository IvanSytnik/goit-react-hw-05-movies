import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
const TopMovies = lazy(() => import("./TopMovies/TopMovies"))
const ResultFilms = lazy(() => import("./SearchFilm/ResultFilms"))
const FilmDetails = lazy(() => import("./FilmDetails/FilmDetails"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))

export const App = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<Layout />}>

          <Route index element={<TopMovies/>}/> 
          
          <Route path="movies" element={<ResultFilms/>}/>
          <Route path="movies/:id" element={<FilmDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>

          </Route>
      </Route>
    </Routes>
    <GlobalStyle />
    </>
  );
};
