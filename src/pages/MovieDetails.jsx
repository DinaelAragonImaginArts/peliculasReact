import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { HttpClient } from "../utils/HttpClient";
import { Spiner } from '../components/Spiner'
import style from './MovieDetails.module.css';

export function MovieDetails() {
   
    const { movieId } = useParams();
    const [movie, setMovie ]  = useState(null);
    const [isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        HttpClient("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
      }, [movieId]);

      if (isLoading){
          return <Spiner />
      }
    
    if (!movie){
        return null; 
    } 

    const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    return (
        <div className={style.detailsContainer}>
            <img className={`${style.col}  ${style.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${style.col}  ${style.movieDetails}`}>
                <p className={style.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p>
                    <strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(" - ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>

            </div>
        </div>
    );
}