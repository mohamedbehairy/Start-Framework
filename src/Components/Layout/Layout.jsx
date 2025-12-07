import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet></Outlet>

      <Footer />
    </>
  );
}
