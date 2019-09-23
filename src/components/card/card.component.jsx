import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.userjson.id}?set=set2`} className='card-img' alt={props.userjson.name} title={props.userjson.name}/>
        <h2 className='card-title' title='redsdf'> {props.userjson.name} </h2>
        <p className='card-email'> {props.userjson.email} </p>
    </div>
);