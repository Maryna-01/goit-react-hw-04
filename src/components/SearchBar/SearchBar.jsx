// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function SearchBar({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = event => setInputValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            toast.error('Please enter a search term.');
            return;
        }
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search images and photos"
                    autoComplete="off"
                    autoFocus
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}

export default SearchBar;
