import { Link } from "react-router-dom";

const LogoutNav = () => {
  return (
    <div>
      <Link to={"/login"} className="text-lg font-bold text-gray-700">로그인</Link>
    </div>
  );
};

export default LogoutNav;
