import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default DashboardLayout;