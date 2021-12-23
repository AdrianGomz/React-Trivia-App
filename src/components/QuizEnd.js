import "./QuizEnd.css";
const QuizEnd = ({ score }) => {
  return (
    <div>
      <h1>End</h1>
      <h2>Score: {score}</h2>
      <button className="btn-end">Restart</button>
    </div>
  );
};
export default QuizEnd;
