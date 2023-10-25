import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <Box>
          <Card
            sx={{
              maxWidth: 300,
              mx: 1,
              my: 2,
              border: "1px solid white",
              "&:hover": { transform: "scale(1.08)",  },
            }}
          >
            <CardMedia>
              <img
                style={{ width: "350px", height: "auto" }}
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt={movie.original_title}
              />
            </CardMedia>
            <CardContent>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Montserrat",
                  p: 1,
                  textAlign: "center",
                }}
              >
                {movie.original_title.slice(0, 25)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Link>
    </>
  );
};
