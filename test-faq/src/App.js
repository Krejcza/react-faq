import questions from "./data"
import Question from "./components/Question"


const App = () =>{



  return <div className="wrapper"> 
      <div className="all-questions">
      {
        questions.map((oneQuestion) =>{
          return <Question key={oneQuestion.id} {...oneQuestion} />
        }) 
      }
    </div>
  </div>
}

export default App