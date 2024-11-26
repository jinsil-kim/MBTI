import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const nav = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const { nickname } = await login(formData);
      toast.success(`로그인 성공! ${nickname}님 환영합니다`);
      nav("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-red-500">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
