import React from 'react';

function Game({ percentage, question, onClickVariant }) {
    // console.log(question);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((elem, index) =>
                        <li
                            key={index}
                            onClick={() => onClickVariant(index)}
                        >{elem}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Game
