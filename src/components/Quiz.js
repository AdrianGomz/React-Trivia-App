import Question from "./Question";
import Answer from "./Answer";
import QuizEnd from "./QuizEnd";
import QuizStart from "./QuizStart";
import { useState } from "react";
import "./Quiz.css";

const randomInt = (min, max) => {
  // This function generates random integers in the specified range
  return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomList = (min, max, n) => {
  // This function creates a list of n random integers in the specified interval.
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    let n = randomInt(min, max);
    if (!randomArray.includes(n)) {
      randomArray.push(n);
    } else {
      i--;
    }
  }
  return randomArray;
};

const Quiz = ({ data }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [totalNumberOfQuestions, setTotalNumberOfQuestions] = useState(0);

  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };
  const handleStart = (numOfQuestions) => {
    // Sets the total number of questions in the quiz and set current Question to 1 to start the quiz
    setTotalNumberOfQuestions(numOfQuestions);
    nextQuestion();
  };
  const handleRestart = () => {
    // resets all the values to 0, which takes us to the start page.
    setTotalNumberOfQuestions(0);
    setQuestionNumber(0);
    setScore(0);
  };
  // Render start page of the quiz
  if (questionNumber === 0) {
    return <QuizStart handleStart={handleStart} />;
  }

  // Render end page of the quiz
  if (questionNumber > totalNumberOfQuestions) {
    return <QuizEnd score={score} handleRestart={handleRestart} />;
  }

  // Question shuffling
  const shuffleOrder = generateRandomList(
    0,
    data.length,
    totalNumberOfQuestions
  );
  const currentQuestion = data[shuffleOrder[questionNumber - 1]];

  // get the string of the right answer
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
    // checks the right answer and handles the score
    if (rightAns === ans) {
      setScore(score + 1);
    }
  };

  if (questionNumber <= totalNumberOfQuestions) {
    return (
      <div>
        <h1 className="title">React Trivia App</h1>
        <h3>
          Question: {questionNumber}/{totalNumberOfQuestions}{" "}
        </h3>
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
