
import React from 'react'
import { useState, useEffect } from 'react'
import QuestionServices from '../../services/QuestionsServices'
import QuizList from './QuizList';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [randomQuestionsIndex, setRandomQuestionsIndex] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [qTracker, setQtracker] = useState(0);


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

  

  return (
    <div>
      <h4>Quiz</h4>
      <QuizList 
      questions={questions} 
      randIndex = {randomQuestionsIndex} 
      setScore ={setScore} 
      setShowScore = {setShowScore}
      handleClick = {handleClick}
      showScore = {showScore}
      score = {score}
      qTracker = {qTracker}
      />
    </div>

  )
}

