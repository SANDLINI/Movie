import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";
import StarIcon from "@mui/icons-material/Star";

export const Home = () => {
  const [popularMovies, setPopulaMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setPopulaMovies(data.results));
  }, []);

  return (
    <>
      <Box sx={{}}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          emulateTouch={true}
          transitionTime={300}
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
        >
          {popularMovies.map((movies) => {
            return (
              <Box
                key={movies.id}
                sx={{
                  width: { xs: "100%", sm: "80%", md: "70%", xxl: "100%" },
                  height: "auto",
                  m: "auto",
                  bgcolor: "black",
                }}
              >
                <Link to={`/movie/${movies.id}`}>
                  <Box sx={{ cursor: "pointer" }}>
                    <img
                      style={{ height: "100%" }}
                      src={`https://image.tmdb.org/t/p/original${
                        movies && movies.backdrop_path
                      }`}
                      alt={movies.original_title}
                    />
                  </Box>
                </Link>
                <Box
                  sx={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex",
                    alignItems: "flex-start",
                    pl: 3,
                    pt: 1,
                    mb: 5,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "600", fontFamily: "Montserrat" }}
                    >
                      {movies.original_title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      {movies.release_date}
                    </Typography>
                  </Box>
                  <Box sx={{display:"flex"}}>
                    <span>
                      <Typography>IMDB : {movies.vote_average}</Typography>
                    </span>
                    <span>
                      <StarIcon fontSize="small" />
                    </span>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Carousel>
      </Box>
      <Box>
        <MovieList />
      </Box>
    </>
  );
};
