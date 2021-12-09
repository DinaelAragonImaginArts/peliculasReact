import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import { GetMovieImg } from '../utils/GetMovieImg';

export function MovieCard({ movie }) {
    const imageUrl = GetMovieImg(movie.poster_path, 300);
    return (
        <li className={styles.movieCard} >
            <Link to={'/movies/' + movie.id}>
                <img 
                src={imageUrl} 
                alt={movie.title} 
                className={styles.movieImage} 
                />
                <div>{movie.title}</div>
            </Link>
        </li>

    );
}