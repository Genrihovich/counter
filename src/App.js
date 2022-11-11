import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

//https://cdn.cur.su/api/latest.json
// https://api.currencylayer.com/list?access_key=UhCP9mFXslQgNeBweqQYjl4wVeG1tXaD

function App() {

  const [rates, setRates] = useState({});// курсы валют
  const [currencyFrom, setCurrencyFrom] = useState('UAH');//от 
  const [currencyTo, setCurrencyTo] = useState('USD');//куда

  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(0);


  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((response) => response.json())
      .then((json) => {
        setRates(json.rates)
        console.log(json.rates);
      })
      .catch(err => {
        console.warn(err);
        alert('Не удалось загрузить данные')
      })
  }, []);

  const onChangeValueFrom = (value) => {
    setValueFrom(value);
  }
  const onChangeValueTo = (value) => {
    setValueTo(value);
  }


  return (
    <div className="App">
      <Block
        value={valueFrom}
        currency={currencyFrom}
        // onChangeCurrency={(cur) => setCurrencyFrom(cur)}  
        onChangeCurrency={setCurrencyFrom}
        onChangeValue={onChangeValueFrom}
      />
      <Block
        value={valueTo}
        currency={currencyTo}
        onChangeCurrency={setCurrencyTo}
        onChangeValue={onChangeValueTo}
      />
    </div>
  );
}

export default App;