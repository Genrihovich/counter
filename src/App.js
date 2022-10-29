import React from 'react';
import './index.scss';
import BtnNoAnimated from './component/BtnNoAnimated.jsx'
import BtnAnimated from './component/BtnAnimated.jsx'
import BtnAnimatedComponent from './component/BtnAnimatedComponent';

function App() {
  return (
    <div className="App">
      <BtnNoAnimated />
      <hr />
      <BtnAnimated />
      <hr />
      <BtnAnimatedComponent />
    </div>
  );
}

export default App;