import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResult";

const TestResultItem = ({ results, onUpdate, currentUser }) => {
  const { username, description, createdAt, result, visibility, userId, id } =
    results;

  const isLogin = currentUser?.userId === userId;

  const handleToggleVisibility = async () => {
    try {
      // 서버에서 visibility 상태를 토글
      const updatedVisibility = !visibility; // 토글 상태 결정
      await updateTestResultVisibility(id, updatedVisibility);

      // 기존 결과 상태를 업데이트하여 프론트엔드에 반영
      onUpdate(id, { ...results, visibility: updatedVisibility });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      //서버 삭제 상태 업데이트
      await deleteTestResult(id);
      //프론트엔드 삭제 상태 업데이트
      onUpdate(id, null);
    } catch (error) {
      console.error(error.message);
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
          <button
            onClick={handleToggleVisibility}
            className="bg-blue-500 py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
          >
            {visibility ? "비공개" : "공개"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
