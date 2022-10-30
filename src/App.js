import { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {
  const countQuestions = questions.length; //скільки питаннь всього   
  const [step, setStep] = useState(0); // яка стадія опросу
  const question = questions[step];//виймаємо перше питання з масиву
  const [correctQuestion, setCorrectQuestion] = useState(0);//правильні відповіді
  const percentage = Math.round(step / countQuestions * 100);

  const onClickVariant = (index) => {
    // index - індекс вибранного варіанта відповіді
    console.log(step, index);
    if (index === question.correct) {
      setCorrectQuestion(correctQuestion + 1);//лічильник ОК відповідей
    }

    console.log('correctQuestion - ', correctQuestion);
    setStep(step + 1);//переходимо до наступного питання
  }

  return (
    <div className="App">
      {
        step !== countQuestions
          ? <Game
            percentage={percentage}
            question={question}
            onClickVariant={onClickVariant}
          />
          : <Result
            correctQuestion={correctQuestion}
            countQuestions={countQuestions}
          />
      }
    </div>
  );
}

export default App;