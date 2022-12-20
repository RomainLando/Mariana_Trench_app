import React from 'react';
import './QuizList.css'
import { Link } from 'react-router-dom';

const QuizList = ({ questions, randIndex, handleClick, score, qTracker, checkEnd }) => {
    if (!questions.length) return null;
    if (!randIndex.length) return null;
    

    return (

        <>

            <div>
                {qTracker === 5 ? (
                    <div>
                        {checkEnd()}
                        <section id='quiz-score'>
                            You scored {score} out of 5!
                        </section>
                        <p id="quiz-leaderboard-p">See your score in the leaderboard!</p>
                        
                    </div>
                ) : (<div>
                    

                    <section id='QuizContainer'>
                        <h3>{questions[randIndex[qTracker]].question}</h3>
                        {questions[randIndex[qTracker]].answerOptions.map((option, index) => {
                            return (
                                
                                    <button key={index} onClick={() => { 
                                        handleClick(option.isTrue)
                                        
                                        
                                        }}>
                                        {option.option}
                                    </button>

                                
                            )
                        }


                        )}

                    </section>


                </div>)
                
                
                   }

                


                


            </div>

        </>
    );
}



export default QuizList;