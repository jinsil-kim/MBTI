import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center h-16 px-6">
          <div>
            <Link to="/" className="text-lg font-bold text-gray-700">
              홈
            </Link>
          </div>
          <div>
            <LoginNav />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
