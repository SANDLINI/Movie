import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { MovieList } from "./components/MovieList/MovieList";
import { MovieDetail } from "./Pages/MovieDetail/MovieDetail";
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies/:type" element={<MovieList />} />
        </Route>
      </Routes>
    </>
  );
};
