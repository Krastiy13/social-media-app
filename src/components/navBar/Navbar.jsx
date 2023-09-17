import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import imagen from "../../assets/WhatsApp Image 2023-05-27 at 00.05.45.jpeg";
import { toggleDarkMode, updateDarkmode } from "../../redux/slice/darkmode";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../redux/slice/authuser";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const authUser = useSelector((state) => state.userAuth.userAuth);

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));

    dispatch(setUserAuth(userAuth));

    // Despacha la acción "updateDarkmode" con el valor de "darkMode" desde el localStorage
    dispatch(updateDarkmode(darkMode));
  }, [dispatch]);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={() => dispatch(toggleDarkMode())} />
        ) : (
          <DarkModeOutlinedIcon onClick={() => dispatch(toggleDarkMode())} />
        )}

        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={authUser.coverPic} alt="" />
          <span>Mohamed asdaf</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
