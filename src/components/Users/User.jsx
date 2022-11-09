import React from 'react';
import { IconEmailSvg } from '../svg/IconSvg';

export const User = ({ id, email, first_name, last_name, avatar, onInviteClick, isInvited }) => (
    <li>
        <div>
            <img className="avatar" src={avatar} alt="User" />
            <div>
                <h3>{first_name} {last_name}</h3>
                <p>
                    <IconEmailSvg />
                    {email}
                </p>
            </div>
        </div>
        <img
            onClick={() => onInviteClick(id)}
            className="action"
            src={`/assets/${isInvited ? 'minus' : 'plus'}.svg`}
            alt="Action"
        />
    </li>
);