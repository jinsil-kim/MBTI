import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile(currentUser.accessToken);
        setNickname(profile.nickname);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [currentUser.accessToken]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!currentUser) {
        toast.error("로그인을 해주세요");
        return;
      }

      const data = await updateProfile({ nickname }, currentUser.accessToken);
      if (data.success) {
        toast.success("변경성공");
        const updatedUser = { ...currentUser, nickname: data.nickname };
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    } catch (error) {
      toast.error("프로필 업데이트 실패");
      console.error(error.response?.data || error.message);
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
