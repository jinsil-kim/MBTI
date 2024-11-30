import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginNav = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("로그아웃");
    nav("/login");
  };
  return (
    <div>
      <Link to="/profile" className="text-lg text-red-400 mr-4">
        프로필
      </Link>
      <Link to="/test" className="text-lg text-red-400 mr-4">
        테스트
      </Link>
      <Link to="/result" className="text-lg text-red-400 mr-4">
        결과 보기
      </Link>
      <button
        onClick={handleLogout}
        className="p-3 bg-red-400 rounded-md text-white"
      >
        로그아웃
      </button>
    </div>
  );
};

export default LoginNav;
