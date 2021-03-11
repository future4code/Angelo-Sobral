import React from 'react';
import './CardPequeno.css';

export const CardPequeno = (props =>
    <div className="page-section-container">
        <p className="info-content"><img src={props.icon}></img><strong>Email:</strong> {props.email} </p>
        <p className="info-content"><img src={props.iconAdress}></img><strong>Endereço:</strong> {props.endereco} </p>
    </div>
)

// export default CardPequeno