import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

//https://cdn.cur.su/api/latest.json

function App() {

  const [rates, setRates] = useState({});// курсы валют
  const [currencyTo, setCurrencyTo] = useState('UAH');
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [valueTo, setValueTo] = useState(0);
  const [valueFrom, setValueFrom] = useState(0);

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((response) => response.json())
      .then((json) => {
        setRates(json.rates)
        //  console.log(json.rates);
      })
      .catch(err => {
        console.warn(err);
        alert('Не удалось загрузить данные')
      })
  }, []);

  const onChangeCurrencyTo = (cur) => {
    setCurrencyTo(cur);
  };
  const onChangeCurrencyFrom = (cur) => {
    setCurrencyFrom(cur);
  };

  const onChangeValueTo = (e) => {
    setValueTo(e);
  }
  const onChangeValueFrom = (e) => {
    setValueFrom(e);
  }


  return (
    <div className="App">
      <Block
        value={valueTo}
        currency={currencyTo}
        onChangeCurrency={onChangeCurrencyTo}
        onChangeValue={onChangeValueTo}
      />
      <Block
        value={valueFrom}
        currency={currencyFrom}
        onChangeCurrency={onChangeCurrencyFrom}
        onChangeValue={onChangeValueFrom}
      />
    </div>
  );
}

export default App;