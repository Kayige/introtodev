import React from 'react';
import classes from './MovieCard.module.css';

export default function MovieCard({movie}){
    return (

        <div className={`${classes.card} ${classes['col-3']}`}key={movie.id} >
            <img className={classes.cardimage}
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
        <div className={classes.cardcontent}>
            <h3>{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p>
        
        </div>
        </div>

    )
}
// short description of movie
// <p><small>{movie.overview}</small></p>