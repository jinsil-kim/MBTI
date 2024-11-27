import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// GET: 테스트 결과 목록 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error("Error fetching test results:", error.message);
    throw error; // 호출부에서 처리하도록 에러 전달
  }
};

// POST: 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const res = await axios.post(API_URL, resultData);
    console.log("res", res);
    return { success: true, data: res.data }; // 성공 시 데이터 반환
  } catch (error) {
    console.error("Error creating test result:", error.message);
    return { success: false, error: error.message }; // 실패 시 에러 메시지 반환
  }
};

// DELETE: 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting test result:", error.message);
    return { success: false, error: error.message };
  }
};

// PATCH: 테스트 결과 visibility 업데이트
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    await axios.patch(`${API_URL}/${id}`, { visibility });
    return { success: true };
  } catch (error) {
    console.error("Error updating visibility:", error.message);
    return { success: false, error: error.message };
  }
};
