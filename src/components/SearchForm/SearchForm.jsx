import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from './SearchForm.module.css'

const SearchForm = () => {
    const [input, setInput] = useState('');
    const [, setSearch] = useSearchParams();

    const hendleSubmit = (event) => {
        event.preventDefault();
        setSearch({query: input})
    }

    return (
        <form className={css.form} onSubmit={hendleSubmit}>
            <input
            type="text"
            name="input"
            placeholder="Search..."
            value={input}
            onChange={(event)=> setInput(event.target.value)}
            />
            <button type="submit">
                Search Movies
            </button>
        </form>
    );
}

export default SearchForm;