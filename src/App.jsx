import { useState } from "react";
import "./App.css";
import React from "react";
import Router from "./routes/routes";
import Navbar from "./components/navBar/Navbar";
import Leftbar from "./components/leftBar/Leftbar";
import Rightbar from "./components/rightBar/Rightbar";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <Router />
    </>
  );
}

export default App;
