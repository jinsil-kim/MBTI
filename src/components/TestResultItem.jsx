import { useState } from "react";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResult";

const TestResultItem = ({ results, onUpdate, currentUser }) => {
  const { username, description, createdAt, result, visibility, userId } =
    results;
  console.log("visibility", visibility);

  const isLogin = currentUser?.userId === userId;

  const [loading, setLoading] = useState(false);

  const handleToggleVisibility = async () => {
    setLoading(true);
    try {
      const updatedVisibility = !visibility;

      //서버 visibility 상태 업데이트
      await updateTestResultVisibility(results.id, updatedVisibility);

      //프론트엔드 visibility 상태 업데이트
      onUpdate(results.id, updatedVisibility);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      //서버 삭제 상태 업데이트
      await deleteTestResult(results.id);
      //프론트엔드 삭제 상태 업데이트
      onUpdate(results.id);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
        <h4 className="text-xl font-semibold">{username}</h4>
        <p className="text-sm text-gray-400">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
      <p className="text-2xl font-bold text-yellow-400 mb-4">{result}</p>
      <p className="text-base text-gray-300 mb-4">{description}</p>

      {isLogin && (
        <div className="flex justify-between">
          <button onClick={handleToggleVisibility}>
            {visibility ? "비공개" : "공개"}
          </button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
