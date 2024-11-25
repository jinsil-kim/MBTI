import { Link } from "react-router-dom";

const LogoutNav = () => {
  return (
    <div>
      <Link to={"/login"}>로그인</Link>
    </div>
  );
};

export default LogoutNav;
