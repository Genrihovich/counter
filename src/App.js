import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]); //массив юзеров
  const [isLoading, setLoading] = useState(true); //идет загрузка

  //отправляем запрос на бекенд
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((resp) => resp.json())
      .then((json) => {
        setUsers(json.data)
      }).catch((err) => {
        console.warn(err);
        alert('Ошибка при получении юзеров')
      }).finally(() => setLoading(false)); //когда загружено прячем Sceleton
  }, []);



  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;