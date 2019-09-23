import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.usersjson.map(userjson => (
            <Card key={userjson.id} userjson={userjson} />
        ))}
    </div>
);