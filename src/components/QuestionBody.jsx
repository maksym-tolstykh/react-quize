import React, { Fragment } from 'react'


export default function QuestionBody({questions,handleAnswer, currIndex,maxQuestion}) {

    const answers = [questions.correct_answer, ...questions.incorrect_answers].sort(()=>Math.random()-0.5);

    console.log(answers);

    return (
        <Fragment>
            <h3 className="category_title">{questions.category}</h3>
            <h3 className="question_title" dangerouslySetInnerHTML={{ __html: questions.question }}></h3>
            {<div className="number_of_question"><span>{currIndex+1}/<span>{maxQuestion}</span> </span></div>}
            <div className="answer_list">

                {answers.map((answer) =>{
                    return  <button onClick={()=>handleAnswer(answer)}          
                                    className= 'item' //className={`${questions.correct_answer === answer ? 'item_c': 'item'} item ` }
                                    dangerouslySetInnerHTML={{ __html: answer }}></button>
                })}

               
            </div>
        </Fragment>
    )
}
