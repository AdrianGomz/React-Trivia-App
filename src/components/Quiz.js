import Question from "./Question";
import Answer from "./Answer";
import QuizEnd from "./QuizEnd";
import { useState } from "react";
import "./Quiz.css";

const Quiz = ({ data }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(0);

  if (questionNumber > data.length) {
    return <QuizEnd score={score} />;
  }

  const currentQuestion = data[questionNumber - 1];

  let rightAns;
  switch (currentQuestion.correct_ans) {
    case "A":
      rightAns = currentQuestion.ansA;
      break;
    case "B":
      rightAns = currentQuestion.ansB;
      break;
    case "C":
      rightAns = currentQuestion.ansC;
      break;
    case "D":
      rightAns = currentQuestion.ansD;
      break;
    default:
      break;
  }

  const checkAns = (ans) => {
    if (rightAns === ans) {
      setScore(score + 1);
    }
  };
  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  if (questionNumber <= data.length) {
    return (
      <div>
        <h1 className="title">React Trivia App</h1>
        <h3>Question: {questionNumber}/15 </h3>
        <h3>Score: {score}</h3>
        <Question question={currentQuestion.question} />
        <div>
          <Answer
            nextQuestion={nextQuestion}
            checkAns={checkAns}
            ans={currentQuestion.ansA}
            color="#1fbfb8"
          />
          <Answer
            nextQuestion={nextQuestion}
            checkAns={checkAns}
            ans={currentQuestion.ansB}
            color="#05716c"
          />
          <Answer
            nextQuestion={nextQuestion}
            checkAns={checkAns}
            ans={currentQuestion.ansD}
            color="#1978a5"
          />
          <Answer
            nextQuestion={nextQuestion}
            checkAns={checkAns}
            ans={currentQuestion.ansC}
            color="#031163"
          />
        </div>
      </div>
    );
  }
};
export default Quiz;
