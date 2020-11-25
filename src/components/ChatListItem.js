import React from 'react';
import './ChatListItem.css';

export default ({onClick, active, data}) => {
    return (
        <div 
            //Condição para mostrar a mensagem na tela
            className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.image} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                <div className="chatListItem--name">{data.title}</div>
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