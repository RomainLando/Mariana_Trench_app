import React from 'react';


const QuizList = ({questions}) => {

    if (!questions.length) return null;

    // 

    return (
        <div>
            {/* {console.log(questions[0])} */}
            <h3>{questions[0].question}</h3>
            {questions[0].options.map((option) => <li>{option}</li>)}
        </div>
    );
}



export default QuizList;