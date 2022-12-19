import React from 'react';


const QuizList = ({ questions, randIndex, handleClick, score, qTracker }) => {
    if (!questions.length) return null;
    if (!randIndex.length) return null;

    return (

        <>

            <div>
                {qTracker === 4 ? (
                    <div>
                        <section>
                            You scored {score} out of 5!
                        </section>
                        
                    </div>
                ) : (<div>
                    

                    <section>
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