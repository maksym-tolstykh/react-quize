import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuestionBody from './components/QuestionBody';

const API_url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false)

  useEffect(() => {
    axios.get(API_url).then(res => {
      const dataQ = res.data;
      setQuestions(dataQ.results);

    });

    // fetch(API_url)
    //  .then(res => res.json())
    //   .then((data) => {setQuestions(data.results)  }); ---Аналог axios---

  }, []);
  const maxQuestion = questions.length
  const handleAnswer = (answer) => {
    //перевірка відповіді
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex);
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score+1);
      alert("Correct");
    }

    
    if(newIndex >=questions.length){
      setGameEnded(true);
    }
  }

  return (
    <div className="App">
      <div className="app_title">React Quize App</div>

      {gameEnded ?(<div><h1>Game End</h1> <span>Score:{score}</span></div> ) : (questions.length > 0 ? (
        <div className="question_body">
          <QuestionBody handleAnswer={handleAnswer} questions={questions[currentIndex]} currIndex = {currentIndex} maxQuestion={maxQuestion}/>
        </div>
      ) : (<h1>Loading..</h1>))
      }


    </div>
  );

}

export default App;
