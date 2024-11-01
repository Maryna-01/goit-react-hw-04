import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            toast.error('Please enter a search term.');
            return;
        }
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for images..."
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Search</button>
            <ToastContainer position="top-right" autoClose={3000} />
        </form>
    );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;


