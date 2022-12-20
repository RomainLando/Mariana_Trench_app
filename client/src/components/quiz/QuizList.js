import React from 'react';
import './QuizList.css'

const QuizList = ({ questions, randIndex, handleClick, score, qTracker }) => {
    if (!questions.length) return null;
    if (!randIndex.length) return null;

    return (

        <>

            <div>
                {qTracker === 5 ? (
                    <div>
                        <section>
                            You scored {score} out of 5!
                        </section>
                        
                    </div>
                ) : (<div>
                    

                    <section id='QuizContainer'>
                        <h3>{questions[randIndex[qTracker]].question}</h3>
                        {questions[randIndex[qTracker]].answerOptions.map((option, index) => {
                            return (
                                
                                    <button key={index} onClick={() => { handleClick(option.isTrue) }}>
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