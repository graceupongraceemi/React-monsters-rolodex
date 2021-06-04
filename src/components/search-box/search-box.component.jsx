import React from 'react';

import './search-box.styles.css';

// the below is just a functional component which just get some props and return HTML
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
