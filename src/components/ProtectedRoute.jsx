import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  //로컬스토리지에서 유저 데이터 확인
  const user = JSON.parse(localStorage.getItem("user"));
  const isLogin = !!user;

  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
