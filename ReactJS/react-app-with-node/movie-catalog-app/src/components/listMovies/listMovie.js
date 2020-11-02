import React, { useEffect,useState} from 'react';
import axios from "axios";
import classes from "./listMovie.module.css";


const api_key = "d431e3825c6c47923e22a5dc91f52227";
const BASE_URL= "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

export default function ListMovies(){

    // create the state for the movies
    const [data, setData] = useState([]);

    const api = axios.create({ baseURL: BASE_URL });

    const getUpcoming = api.get("movie/upcoming", { params: { api_key } });
  
    useEffect(() => {
      getUpcoming.then((res) => {
        setData(res.data.results);
      });
    }, []);

    return (
        
        <div className="ListMovies row">

            {data.filter(movie => movie.poster_path).map(movie => (
                <div className={`${classes.movielist} ${classes['col-3']}`} key={movie.id} >
                    <img className={classes.movieimage}
                    src={getImage(movie.poster_path)} 
                    alt={movie.title + ' poster'}
                    />
                    <h5>{movie.original_title}</h5>
                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p><small>RATING: {movie.vote_average}</small></p>

                </div>
                ))}

        </div>
    )
}
