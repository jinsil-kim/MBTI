import API from "./api";

//회원가입
export const register = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

//로그인
export const login = async (userData) => {
  try {
    const res = await API.post("/login", userData);
    const { userId, nickname, accessToken } = res.data;

    localStorage.setItem(
      "user",
      JSON.stringify({ userId, nickname, accessToken })
    );
    return { userId, nickname, accessToken };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

//프로필 조회
export const getUserProfile = async (token) => {
  try {
    const res = await API.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//프로필 업데이트
export const updateProfile = async (nickname, token) => {
  try {
    const formData = new FormData();
    formData.append("nickname", nickname);

    const res = await API.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
