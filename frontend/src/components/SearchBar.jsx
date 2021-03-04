import styles from '../styles/components/SearchBar.module.css';

export function SearchBar() {
    return(
        <div className={ styles.searchContainer }>
            <span>Pesquisar...</span>
            <input type="text" />
            <img src="assets/search-24px.svg" alt="search icon"/>
        </div>
    )
}