import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
export const Header = () => {
  const activeNavLink = ({ isActive }) => {
    return {
      color: isActive ? "Red" : "white",
    };
  };

  return (
    <>
      <Box>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar sx={{ fontFamily: "Montserrat", position: "static" }}>
            <NavLink style={activeNavLink} to={"/"} className={styles.a}>
              Home
            </NavLink>
            <NavLink
              style={activeNavLink}
              to={"/movies/popular"}
              className={styles.a}
            >
              Popular
            </NavLink>
            <NavLink
              style={activeNavLink}
              to={"/movies/top_rated"}
              className={styles.a}
            >
              Top Rated
            </NavLink>
            <NavLink style={activeNavLink} to={"/movies/upcoming"} className={styles.a}>
              Upcoming
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
