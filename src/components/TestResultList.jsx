import { toast } from "react-toastify";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, setResults }) => {
  // 로컬스토리지에서 현재 사용자 정보 가져오기
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const handleUpdate = (id, updatedResult) => {
    if (updatedResult === null) {
      // 삭제된 결과 제거
      if (confirm("정말 삭제하시겠습니까?")) {
        setResults((prevResults) =>
          prevResults.filter((result) => result.id !== id)
        );
        toast.success("삭제 완료");
      }
    } else {
      // 상태 갱신
      setResults((prevResults) =>
        prevResults.map((result) => (result.id === id ? updatedResult : result))
      );
    }
  };

  return (
    <div className="space-y-6">
      {results
      // 공개 여부가 true || 현재 유저가 해당 유저인지에 따른 필터링
        .filter(
          (result) => result.visibility || result.userId === currentUser.userId
        )
        .map((item) => {
          return (
            <TestResultItem
              key={item.id}
              results={item}
              currentUser={currentUser}
              onUpdate={handleUpdate}
            />
          );
        })}
    </div>
  );
};

export default TestResultList;
