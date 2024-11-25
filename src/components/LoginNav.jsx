import { Link, useNavigate } from "react-router-dom";

const LoginNav = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    alert("로그아웃");
    nav("/login");
  };
  return (
    <div>
      <Link to="/profile">프로필</Link>
      <Link to="/test">테스트</Link>
      <Link to="/result">결과 보기</Link>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default LoginNav;
