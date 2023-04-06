import { useState } from "react";

const SearchForm = ({ addQuery }) => {
    const [query, setQuery] = useState('');

    const hendleChangeName = (event) => {
        setQuery(event.target.value);
    }

    const hendleSubmit = (event) => {
        event.preventDefault();
        if (query.length < 0) {
            return;
        } else {
            addQuery(query);
            setQuery('');
        }
    }

    return (
        <form onSubmit={hendleSubmit}>
                <label >
                    <p>Movie</p>
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    value={query}
                    onChange={hendleChangeName}
                    />
                </label>
                <button type="submit">
                    Search Movies
                </button>
            </form>
    );
}

export default SearchForm;