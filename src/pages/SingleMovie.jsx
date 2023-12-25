import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleMovie = () => {
  const [movies, setMovies] = useState(null);

  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmRjOTcxNTRkYWM1NjUxMmY2Mjc1YzEzMjg5ZDM1MiIsInN1YiI6IjY1ODk3YjBiNDc3MjE1NDY4ODQzMzUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cp92oRdQd8MgTg82BkC0dSCBdSjc1fMQrMNBLrQHjxk",
    },
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  async function fetchData(url) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }


  const imageURL = "https://image.tmdb.org/t/p/w500";


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card" style={{ width: "90%" }}>
            <img
              src={`${imageURL}${movies?.poster_path}`}
              className="card-img-top"
              alt={movies?.original_title}
            />
            <div className="card-body">
              <h5 className="card-title">{movies?.original_title}</h5>
              <p className="card-text">{movies?.overview}</p>
              <p className="card-text">Released {movies?.release_date}</p>
              <p className="card-text">Vote average: {movies?.vote_average}</p>
              <p className="card-text">Vote count: {movies?.vote_count}</p>
              <Link to="/" className="btn btn-primary">
                back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
