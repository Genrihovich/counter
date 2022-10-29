import React, { useState } from 'react';

const Modal = ({ open, setOpen, children }) => {
  return (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => { setOpen(false) }}>
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  )
}

const BtnAnimated = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper">
      <button
        className="open-modal-btn"
        onClick={() => { setOpen(true) }}
      >✨ Открыть окно динамический контент
      </button>
      <Modal open={open} setOpen={setOpen}>
        <div>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          <h3>Это модальное окно</h3>
          <button>Тестовая кнопка</button>
        </div>
      </Modal>
    </div>
  )
}
export default BtnAnimated;