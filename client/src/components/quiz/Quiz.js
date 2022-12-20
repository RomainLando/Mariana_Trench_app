
import React from 'react'
import { useState, useEffect } from 'react'
import QuestionServices from '../../services/QuestionsServices'
import QuizList from './QuizList';
import './Quiz.css'
import {postLeaderboard} from '../../services/LeaderBoardServices'



export default function Quiz({player}) {
  const [questions, setQuestions] = useState([]);
  const [randomQuestionsIndex, setRandomQuestionsIndex] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [qTracker, setQtracker] = useState(0);
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(false);



  useEffect(() => {
    QuestionServices.getQuestions()
      .then(res => setQuestions(res));
    QuestionServices.getQuestions()
      .then(res => {
        const ques = [...questions]
        const arr = []
        const max = res.length
        while (arr.length < 6) {
          var candidateInt = Math.floor(Math.random() * max)
          if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
        }
        setRandomQuestionsIndex(arr)

      })


  }, []);

 

  const updateCounter = () => {

    if (qTracker < 6){
      let count = qTracker+1;
      setQtracker(count);
      
    }

    
  }
  
  const handleClick = (value) => {
    updateCounter()
    
    if (value) {
      setScore(score + 1);
    }
  }

  const checkEnd = () => {
    if (!test2){
      const payload = {}
      if(player.name ){
        payload["userName"] = player.name;
      }
      else if (!player.name){
        payload["userName"] = "Guest";
      }
      payload["score"] = score;
     
      postLeaderboard(payload).then((data) => {
        setTest(data);
        


    })

    }
    const newVal = true;
    setTest2(newVal)
    

    
  }



  return (
    <div className='QuizOverallContainer'>
      <div id='QuizListDiv'>
        <QuizList
          id='QuizList'
          questions={questions}
          randIndex={randomQuestionsIndex}
          setScore={setScore}
          setShowScore={setShowScore}
          handleClick={handleClick}
          showScore={showScore}
          score={score}
          qTracker={qTracker}
          checkEnd ={checkEnd}
        />


      </div>



   
    </div>

  )
}

