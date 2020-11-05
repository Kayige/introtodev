import React, { useState, useEffect } from "react";
import { ListingCard } from "./ListingCard";
import Banner from "./Banner";
import axios from "./axios";

const api_key = "d431e3825c6c47923e22a5dc91f52227";

export const Listing = () => {
  const [lists, setListing] = useState([]);

  useEffect(() => {
    // run useEffect when row loads
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`
      );
      // gets base url from axios.js and parse the extension from requests.js
      setListing(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
    // if [] , run once when the row loads, and dont run again
    // if async is set you need to include the dependency -> fetchURL
  }, []);

  return (
    <div>
      <Banner />
      <div className="movie-page">
        <div className="container">
          <h1 className="heading">Upcoming Movies</h1>

          {lists.length > 0 && (
            <div className="movie-grid">
              {lists.map((movie) => (
                <div key={movie.id}>
                  <ListingCard movie={movie} key={movie.id} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
