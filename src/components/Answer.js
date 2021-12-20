const Answer = ({ans,nextQuestion,checkAns})=>{
    return <button onClick={()=>{
        checkAns(ans)
        nextQuestion()
    }}>{ans}</button>
}
export default Answer