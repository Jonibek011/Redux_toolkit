import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//rrd
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="bg-white ">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
