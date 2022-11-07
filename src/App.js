import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]); //массив юзеров
  const [invites, setInvites] = useState([]); //массив приглашенных
  const [isLoading, setLoading] = useState(true); //идет загрузка
  const [searchValue, setSearchValue] = useState('');//поиск
  const [isSend, SetSend] = useState(false)

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onInviteClick = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  }

  const onClickSendInvites = () => {
    SetSend(true);
  }

  const onInit = () => {
    setInvites([]);
    SetSend(false);
  }

  return (
    <div className="App">
      {isSend
        ? <Success
          onInit={onInit}
        />
        :
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invites={invites}
          onInviteClick={onInviteClick}
          onClickSendInvites={onClickSendInvites}
        />}
      {/* <Success /> */}
    </div>
  );
}

export default App;