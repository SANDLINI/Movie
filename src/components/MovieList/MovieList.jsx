import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "../Card/Card";

export const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, [type]);

  return (
    <>
      <Box sx={{ width: { xs: "100%" }, m: "auto" }}>
        <Typography variant="h4" sx={{ color: "white", textAlign:'center', p:3 }}>
          {(type ? type : "POPULAR").toUpperCase()}
        </Typography>
        {
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {movieList.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </Box>
        }
      </Box>
    </>
  );
};
