import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6 border-b bg-white">
        <nav>
          <Link to={"/"} className="text-lg font-bold text-gray-700">
            홈
          </Link>
          <Link
            to={"/login"}
            className="text-sm text-red-500 hover:underline hover:text-red-600"
          >
            로그인
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
