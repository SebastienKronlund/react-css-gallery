import React, { useState } from "react";

const API_PATH = 'https://api.unsplash.com/photos/random?count=30&per_page=6';

const SearchBar = (props) => {

    const [value, setValue] = useState('');

    const images = (event) => {
        event.preventDefault();
        
        fetch(`${API_PATH}&query=${value}`, {
			headers: {
				Authorization:
					"Client-ID ZEGwep6cVbW7RI6SJekA7RsFpDsY-_inh5QQXaARvDc",
            }
        })
        .then(raw => raw.json())
        .then(data => localStorage.setItem("data", JSON.stringify(data)))
        .then(mySubmitHandler);
    }

	const mySubmitHandler = () => {
        if(localStorage.data) {
            const data = JSON.parse(localStorage.data);
            console.log(data);
            props.setAllData(data);
        } 
	};

	return (
		<div className="search-container">
			<form id="search-form" onSubmit={images}>
				<input
					id="search-input"
					type="text"
					placeholder="Search..."
					defaultValue=""
                    autoComplete="off"
                    onChange={event => setValue(event.target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchBar;

