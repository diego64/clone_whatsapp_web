import React from 'react';
import './ChatListItem.css';

export default ({onClick, active}) => {
    return (
        <div 
            //Condição para amostrar a mensagem na tela
            className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src="https://www.pluspixel.com.br/wp-content/uploads/avatar-1.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Alex Silva</div>
                    <div className="chatListItem--date">19:25</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Já está em homologação a versão 1.8</p>
                    </div>
                </div>
            </div>
        </div>
    );
}