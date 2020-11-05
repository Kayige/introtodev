import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

const api_key = "d431e3825c6c47923e22a5dc91f52227";

export const Movie = ({ match }) => {
  const [movie, setMovie] = useState({
    id: 0,
    homepage: "",
    original_title: "",
    overview: "",
    genres: {},
    popularity: 0,
    release_date: "",
    runtime: 0,
    status: "",
    tagline: "",
    videos: {},
    vote_average: 0,
    vote_count: 0,
  });

  const [actors, setActors] = useState([]);

  useEffect(() => {
    // run useEffect when row loads
    async function fetchActor() {
      const req = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${api_key}`
      );
      setActors(req.data.cast);
      console.log(req.data.cast);
    }
    fetchActor();

    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${api_key}&append_to_response=videos`
      );

      setMovie(request.data);
    }

    fetchData();
  }, [match.params.id]);
  console.log(actors);
  return (
    <div className="movie-detail">
      <div className="row">
        <div className="col-6 center">
          <img
            alt={movie.id}
            width="85%"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          />
        </div>
        <div className="col-6">
          <h1>{movie.title}</h1>
          <strong> Description: </strong>
          <p>{movie?.overview}</p>
          <hr />
          <strong> Rating: </strong>
          <p className="rate">{movie.vote_average}</p>
          <hr />
          <strong> Cast: </strong>
          <div className="row">
            {actors.map((actor) => (
              <p className="col-3" key={actor.id}>
                {actor.name}
              </p>
            ))}
          </div>
          <hr />
          <div className="col-12">
            <strong>Trailer: </strong>
            <YouTube
              className="col-12"
              videoId={
                movie.videos.results ? movie.videos.results[0].key : null
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
