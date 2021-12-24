import "./QuizStart.css";

const QuizStart = ({ handleStart }) => {
  return (
    <div>
      <h1 className="title">React Trivia App</h1>
      <br></br>
      <h2>Select the number of questions</h2>
      <button className="btn-start" onClick={() => handleStart(5)}>
        5
      </button>
      <button className="btn-start" onClick={() => handleStart(10)}>
        10
      </button>
      <button className="btn-start" onClick={() => handleStart(15)}>
        15
      </button>
    </div>
  );
};
export default QuizStart;
