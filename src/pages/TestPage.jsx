import { useState } from "react";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalaulator";
import { createTestResult } from "../api/testResult";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TestForm from "../components/TestForm";

const TestPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    // 로컬스토리지에서 유저 데이터 가져오기
    const user = JSON.parse(localStorage.getItem("user"));
    // mbti 테스트 결과값 가져옴
    const mbtiResult = calculateMBTI(answers);
    // mbti 결과값을 화면에 랜더링해주기
    setResult(mbtiResult);

    // db에 저장될 테스트 결과 데이터 객체 생성
    try {
      const res = await createTestResult({
        userId: user.userId,
        result: mbtiResult,
        visibility: true,
        username: user.nickname,
        createdAt: new Date().toISOString(),
        description: mbtiDescriptions[mbtiResult],
      });

      // db에 결과값 저장시
      if (res.success) {
        setResult(mbtiResult);
        toast.success("mbti 결과가 저장되었습니다.");
      } else {
        toast.error("결과 저장에 실패했습니다.");
      }
    } catch (error) { // db에 결과값 저장 실패시
      console.error(error.message);
      toast.error("결과 저장 실패");
    }
  };

  // 결과 페이지로 이동
  const handleNavigateToResults = () => {
    navigate("/result");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
