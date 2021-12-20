import Question from "./Question"
import Answer from './Answer'
import QuizEnd from './QuizEnd'
import { useState } from "react"


const Quiz = ({data}) => {
  const [questionNumber, setQuestionNumber]= useState(1)
  const [score, setScore]= useState(0)

  if(questionNumber>data.length){
    return <QuizEnd score={score}/>
  }

    const currentQuestion = data[questionNumber-1]

  let rightAns
  switch(currentQuestion.correct_ans){
    case 'A':
      rightAns=currentQuestion.ansA
      break
    case 'B':
      rightAns=currentQuestion.ansB
      break
    case 'C':
      rightAns=currentQuestion.ansC
      break
    case 'D':
      rightAns=currentQuestion.ansD
      break
    default:
      break}


    const checkAns = (ans)=>{
      if (rightAns===ans){
        setScore(score+1)
      }
    }
    const nextQuestion = ()=>{
      setQuestionNumber(questionNumber+1)
    }


    if (questionNumber<=data.length){
      return(
          <div>
  <h1>{questionNumber}</h1>
  <h2>Score: {score}</h2>
  <Question question={currentQuestion.question}/>
              <Answer nextQuestion = {nextQuestion} checkAns={checkAns}  ans={currentQuestion.ansA} />
              <Answer nextQuestion = {nextQuestion} checkAns={checkAns}  ans={currentQuestion.ansB} />
              <Answer nextQuestion = {nextQuestion} checkAns={checkAns}  ans={currentQuestion.ansD} />
              <Answer nextQuestion = {nextQuestion} checkAns={checkAns}  ans={currentQuestion.ansC} />
          </div>
  
      )
    }
}
export default Quiz