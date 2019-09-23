import React from 'react';

import './serch-box.styles.css';

export const SearchBox = ({ placeholder, handelChange }) => (
    <input className='search-box'
        type='search'
        placeholder={ placeholder }
        onChange={ handelChange }
    />
);