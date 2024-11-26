import TestResultItem from "./TestResultItem";

const TestResultList = ({ results }) => {
  console.log("results22", results);
  return (
    <div>
      {results.map((item) => {
        return <TestResultItem key={item.id} results={item} />;
      })}
    </div>
  );
};

export default TestResultList;
