import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();

  const [currentMovie, setCurrentMovie] = useState(" ");

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCurrentMovie(data));
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "70%", xxl: "100%" },
          m: "auto",
          height: "auto",
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src={`https://image.tmdb.org/t/p/original${
            currentMovie ? currentMovie.backdrop_path : " "
          }`}
          alt={currentMovie.original_title}
        />
      </Box>
      <Box
        sx={{
          color: "white",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "80%" }, m: "auto", pt: 2 }}>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "600", fontFamily: "Montserrat" }}
            >
              {currentMovie.original_title}
            </Typography>
          </Box>
          <Box>
            <Typography>IMDB : {currentMovie.vote_average}</Typography>
          </Box>
          <Box>
            <Typography>
              Runtime : {currentMovie.runtime + " minutes"}
            </Typography>
          </Box>
          <Box>
            <Typography>Release Date : {currentMovie.release_date}</Typography>
          </Box>
          <Box>
            <Typography>{currentMovie.overview}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
