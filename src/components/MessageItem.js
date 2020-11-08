import React from 'react';
import './MessageItem.css';

export default () => {
    return (
        <div className="messageLine">
            <div className="messageItem">
                <div className="messageText">Teste de message</div>
                <div className="messageDate">19:25</div>
            </div>
        </div>
    );
}