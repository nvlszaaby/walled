import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";

const [isLoggedIn, setIsLoggedIn] = useState(false)

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default DashboardLayout;