import React, { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// export default allows import <name> to be renamed with anything aka alias
import axios from "./axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  // react Hook to create movies variable
  // useState to store the parsed movies in the array.
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Code that runs based on a specific condition/variable
  useEffect(() => {
    // run useEffect when row loads
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // gets base url from axios.js and parse the extension from requests.js
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if [] , run once when the row loads, and dont run again
    // if async is set you need to include the dependency -> fetchURL
  }, [fetchURL]);

  // test if hook loads
  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/** posters */}
        {movies.map((movie) => (
          // combines baseurl+img using string interpolation
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
