import { getTestResults } from "../api/testResult";
import TestResultList from "../components/TestResultList";
import { useEffect, useState } from "react";

const TestResult = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchTestResult = async () => {
      try {
        const fetchResult = await getTestResults(); // 테스트 결과 데이터 가져오기
        setResults(fetchResult); // 가져온 데이터를 state에 저장하기
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTestResult();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-10 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList results={results} setResults={setResults} />
      </div>
    </div>
  );
};

export default TestResult;
