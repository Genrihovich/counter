import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

import { IconSearchSvg } from '../svg/IconSvg';

export const Users = ({ items, isLoading, searchValue, onChangeSearchValue, invites, onInviteClick, onClickSendInvites }) => {
    return (
        <>
            <div className="search">
                <IconSearchSvg />
                <input
                    type="text"
                    placeholder="Найти пользователя..."
                    value={searchValue}
                    onChange={onChangeSearchValue}
                />
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className="users-list">
                    {items.filter(obj => {
                        const fullName = obj.first_name + obj.last_name;

                        return (fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
                            (obj.email.includes(searchValue.toLowerCase())))
                    }).map((obj) =>
                        <User
                            isInvited={invites.includes(obj.id)} //проверяем или есть такое id в приглашенных
                            key={obj.id}
                            onInviteClick={onInviteClick}
                            {...obj}
                        />)}
                </ul>
            )}
            {
                invites.length > 0 && (
                    <button
                        onClick={onClickSendInvites}
                        className="send-invite-btn"
                    >Отправить приглашение</button>
                )
            }
        </>
    );
};