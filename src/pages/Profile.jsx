import React, { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";

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
    
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input value={nickname} onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
