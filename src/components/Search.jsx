
import style from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {useQuery} from '../hooks/useQuery';

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/?search=${searchText}`);
    }
    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.seachBox}>
                <input type="text" className={style.searchInput} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button type="submit" className={style.searchButton}><FaSearch /></button>
            </div>
        </form>
    )
}
