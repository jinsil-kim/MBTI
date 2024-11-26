const TestResultItem = ({ results }) => {
  console.log("results", results);
  const { username, description, createdAt, result } = results;
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
    </div>
  );
};

export default TestResultItem;
