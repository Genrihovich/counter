import React from 'react';
import './index.scss';
import BtnNoAnimated from './component/BtnNoAnimated.jsx'
import BtnAnimated from './component/BtnAnimated.jsx'

function App() {
  return (
    <div className="App">
      <BtnNoAnimated />
      <hr />
      <BtnAnimated />
    </div>
  );
}

export default App;