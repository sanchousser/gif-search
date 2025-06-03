import { Component } from 'react';
import css from './GifSearch.module.css'

class GifSearch extends Component {
    state = {}
    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm}>
                    <button type="submit" className={css.SearchForm__button}>
                        <span className={css.SearchForm__button__label}>Search</span>
                    </button>

                    <input
                        className={css.SearchForm__input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search GIFs"
                    />
                </form>
            </header>
        );
    }
}

export default GifSearch;