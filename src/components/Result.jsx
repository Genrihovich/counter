import React from 'react'

function Result({ countQuestions, correctQuestion }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='img' />
            <h2>Вы отгадали {correctQuestion} ответа из {countQuestions}</h2>
            <a href='/'>
                <button>Попробовать снова</button>
            </a>

        </div>
    )
}

export default Result
