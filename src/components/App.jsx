import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MainNav from "./MainNav/MainNav";

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviesInformationPage = lazy(() => import('../pages/MoviesInformationPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(()=> import('./MovieReviews/MovieReviews'))

const SharedLayout = () => {
  return (
    <>
      <MainNav />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:movieID" element={<MoviesInformationPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
