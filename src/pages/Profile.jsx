import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { toast } from "react-toastify";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  useEffect(() => {
    const FetchProfile = async () => {
      try {
        const profile = await getUserProfile();
        setNickname(profile.nickname);
      } catch (error) {
        console.error(error);
      }
    };
    FetchProfile();
  }, []);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("로그인을 해주세요");
        return;
      }

      
    } catch (error) {
      console.error(error.message);
      toast.error("프로필 업데이트 실패");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          프로필 수정
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              닉네임
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-color focus:border-primary-color"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-400 text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
