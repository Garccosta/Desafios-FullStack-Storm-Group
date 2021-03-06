import styles from '../styles/components/SearchBar.module.css';
import { Search } from '@material-ui/icons'

export function SearchBar() {
    return(
        <div className={ styles.searchContainer }>
            <span>Pesquisar...</span>
            <input type="text" />
            <Search style={{ fontSize: 24 , color: "var(gray-icon)" }}/>
        </div>
    )
}