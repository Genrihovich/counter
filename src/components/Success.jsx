import React from 'react';

export const Success = ({ count, onInit }) => {
    return (
        <div className="success-block">
            <img src="/assets/success.svg" alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button
                className="send-invite-btn"
                onClick={onInit}
            >Назад</button>
        </div>
    );
};