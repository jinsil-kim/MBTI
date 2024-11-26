import Navbar from "../headerNavbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10 mt-16 flex flex-col items-center gap-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
