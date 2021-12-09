import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { HttpClient } from "../utils/HttpClient";
import { Spiner } from '../components/Spiner'
import style from './MovieDetails.module.css';
import { GetMovieImg } from '../utils/GetMovieImg';

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
    
    
    const imageUrl = GetMovieImg(movie.poster_path, 500)
    return (
        <div className={style.detailsContainer}>
            <img className={`${style.col}  ${style.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${style.col}  ${style.movieDetails}`}>
                <p className={style.firstItem}><strong>Title:</strong> {movie.title}</p>
                <p>
                    <strong>Genres: </strong>{ " " } 
                    {movie.genres.map(genre => genre.name).join(" - ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>

            </div>
        </div>
    );
}