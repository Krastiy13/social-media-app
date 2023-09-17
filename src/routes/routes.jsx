import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import React, { useEffect } from "react";
import Navbar from "../components/navBar/Navbar";
import Leftbar from "../components/leftBar/Leftbar";
import Rightbar from "../components/rightBar/Rightbar";
import Home from "../pages/home/Home";
import ProfilePage from "../pages/profil/Profil";
import "../style.scss";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const currentUser = true;
const queryClient = new QueryClient();

const Layout = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const userAuthState = useSelector((state) => state.userAuth.userAuth);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet /> {/* Aquí se mostrarán las rutas anidadas */}
          </div>
          <Rightbar />
        </div>
      </div>
    </QueryClientProvider>
  );
};

const Router = () => {
  // useEffect(() => {
  //
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profile/:id" element={<ProfilePage />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <Route index element={<Login />} />
        )}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
