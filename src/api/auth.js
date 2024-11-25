import axios from "axios";

const API = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (userData) => {
  const response = await API.post(`/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const res = await API.post("/login", userData);
  return res.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
