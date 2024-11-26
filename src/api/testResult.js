import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  try {
    const res = await axios.post(API_URL, resultData);
    console.log("res", res);
    return { success: true };
  } catch (error) {
    console.error(error.message);
    return { success: false };
  }
};

export const deleteTestResult = async (id) => {
  await axios.delete(`${API_URL}/test-results`, id);
};

export const updateTestResultVisibility = async (id, visibility) => {
  await axios.patch(`${API_URL}/${id}`, { visibility });
};
