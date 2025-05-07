import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//rrd
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

function MainLayout() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
