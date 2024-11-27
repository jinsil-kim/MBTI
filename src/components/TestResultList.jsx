import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, setResult }) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  // const updateVisibility = (id, updatedVisibility) => {
  //   setResult((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, visibility: updatedVisibility } : item
  //     )
  //   );
  // };

  // const deleteResult = (id) => {
  //   setResult((prev) => prev.filter((item) => item.id !== id));
  // };

  const handleUpdate = (id, updatedResult) => {
    if (updatedResult === null) {
      // 삭제된 결과 제거
      setResult((prevResults) =>
        prevResults.filter((result) => result.id !== id)
      );
    } else {
      // 상태 갱신
      setResult((prevResults) =>
        prevResults.map((result) => (result.id === id ? updatedResult : result))
      );
    }
  };

  return (
    <div className="space-y-6">
      {results
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
