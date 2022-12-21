import React, {useState} from 'react';
import './QuizList.css'
import { Link } from 'react-router-dom';

const QuizList = ({ questions, randIndex, handleClick, score, qTracker, player, postLeaderboard }) => {
    if (!questions.length) return null;
    if (!randIndex.length) return null;
    const [test2, setTest2] = useState(false);
    const [test, setTest] = useState(0);
    


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
            console.log(data)
            setTest(data);
            
    
    
        })
    
        }
        const newVal = true;
        setTest2(newVal)
        
    
        
      }
    if (qTracker ===5 && !test2 ) {
        checkEnd()
    }




    return (

        <>

            <div>
                {qTracker === 5 ? (
                    <div>
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