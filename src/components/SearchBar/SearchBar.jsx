import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.module.css';

function SearchBar({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            alert('Please enter a search term.');
            return;
        }
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for images..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

