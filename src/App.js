import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={decrement}>- Минус</button>
        <button className="plus" onClick={increment}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
