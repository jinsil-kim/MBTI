import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";
import LogoutNav from "./LogoutNav";

const Navbar = () => {
  //로컬스토리지에서 유저 데이터 가져오기
  const user = JSON.parse(localStorage.getItem("user"));
  const isLogin = !!user;

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6 border-b bg-white">
        <nav>
          <div>
            <Link to="/" className="text-lg font-bold text-gray-700">
              홈
            </Link>
          </div>
          <div>{isLogin ? <LoginNav /> : <LogoutNav />}</div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
