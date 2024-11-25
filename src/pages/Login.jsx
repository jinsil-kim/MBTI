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
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
