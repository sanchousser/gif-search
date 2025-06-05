import { Component } from 'react';
import css from './GifSearch.module.css'

class GifSearch extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {

        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.value)
    }

    render() {
        return (
            <header onSubmit={this.handleSubmit} className={css.Searchbar}>
                <form className={css.SearchForm}>
                    <button type="submit" className={css.SearchForm__button}>
                        <span className={css.SearchForm__button__label}>Search</span>
                    </button>

                    <input onChange={this.handleChange}
                        className={css.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search GIFs"
                    />
                </form>
            </header>
        );
    }
}

export default GifSearch;