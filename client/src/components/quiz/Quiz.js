
import React from 'react'
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom';
import QuestionServices from '../../services/QuestionsServices'
import QuizList from './QuizList';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
 

  useEffect(() => {
    QuestionServices.getQuestions()
      .then(res => setQuestions(res))
      
  }, []);

  // const zone1Questions = questions[0].zone1[0].question


  return (
    <div>
      <h4>Quiz</h4>
      <QuizList questions = {questions} /> 
    </div>

  )
}


