import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h2>リアルタイムチャットアプリ<span role="img" aria-label="emoji">💬</span></h2>
            <h3>以下のライブラリを使用しています</h3>
            <h4><span role="img" aria-label="emoji">🐻</span>React</h4>
            <h4><span role="img" aria-label="emoji">🐻</span>Express</h4>
            <h4><span role="img" aria-label="emoji">🐻</span>Nodejs</h4>
            <h4><span role="img" aria-label="emoji">🐻</span>Socket.IO</h4>
        </div>
        {
        users
            ? (
            <div>
                <h1>現在の在室者:</h1>
                <div className="activeContainer">
                <h2>
                    {users.map(({name}) => (
                    <div key={name} className="activeItem">
                        {name}
                        <img alt="Online Icon" src={onlineIcon}/>
                    </div>
                    ))}
                </h2>
                </div>
            </div>
            )
            : null
        }
    </div>
)

export default TextContainer
