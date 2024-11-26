import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const nav = useNavigate();

  const handleSignup = async (formData) => {
    try {
      await register(formData);
      console.log("formData", formData);
      toast.success("회원가입을 축하합니다!");
      nav("/login");
    } catch (error) {
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="mt-4">
          <p className="text-gray-600">
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-red-500">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
