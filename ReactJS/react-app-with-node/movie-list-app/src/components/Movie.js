import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

const api_key = "d431e3825c6c47923e22a5dc91f52227";

export const Movie = ({ match }) => {
  const [movie, setMovie] = useState({
    videos: {},
  });

  useEffect(() => {
    // run useEffect when row loads
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}&append_to_response=videos`
      );

      setMovie(request.data);
    }
    fetchData();
  }, [match.params.id]);

  return (
    <>
      <img
        alt={movie.id}
        width="85%"
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
      />

      <h1>{movie.name}</h1>
      <hr />
      <strong> Description: </strong>
      <p>{movie.description}</p>
      <hr />
      <p className="rate">{movie.vote_average}</p>
      <hr />
      <div className="trailer">
        <strong> Trailer: </strong>
      </div>
      <YouTube
        videoId={movie.videos.results ? movie.videos.results[0].key : null}
      />
    </>
  );
};
