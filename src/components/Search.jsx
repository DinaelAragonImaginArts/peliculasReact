import style from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
import {useQuery} from '../hooks/useQuery';

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.seachBox}>
                <input 
                type="text" 
                className={style.searchInput} 
                value={search ?? ""} 
                placeholder='Search for Title'
                aria-label = 'Search Movies'
                onChange={(e) => {
                    const value = e.target.value;
                    history.push(`/?search=${value}`);
                }} />
            <FaSearch size={20} className={style.searchButton} color="black" />
            </div>
        </form>
    )
}
