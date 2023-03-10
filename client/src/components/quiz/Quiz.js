
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



  useEffect(() => {
    QuestionServices.getQuestions()
      .then(res => {
        const ques = [...res]
        const arr = []
        const max = res.length
        while (arr.length < 6) {
          var candidateInt = Math.floor(Math.random() * max)
          if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
        }
        setRandomQuestionsIndex(arr)
        setQuestions(res)});



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
          player ={player}
          postLeaderboard = {postLeaderboard}
        />


      </div>



   
    </div>

  )
}

