import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
