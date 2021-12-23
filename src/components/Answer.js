import "./Answer.css";
const Answer = ({ ans, nextQuestion, checkAns, color }) => {
  console.log(color);
  return (
    <button
      onClick={() => {
        checkAns(ans);
        nextQuestion();
      }}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {ans}
    </button>
  );
};
export default Answer;
