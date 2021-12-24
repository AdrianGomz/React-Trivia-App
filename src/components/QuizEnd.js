import "./QuizEnd.css";
const QuizEnd = ({ score, handleRestart }) => {
  return (
    <div>
      <h1>End</h1>
      <h2>Score: {score}</h2>
      <button className="btn-end" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};
export default QuizEnd;
