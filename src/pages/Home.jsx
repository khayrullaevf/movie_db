import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/fetchData";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch]);

  const data = useSelector((state) => state.data)

  // const url =
  //   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmRjOTcxNTRkYWM1NjUxMmY2Mjc1YzEzMjg5ZDM1MiIsInN1YiI6IjY1ODk3YjBiNDc3MjE1NDY4ODQzMzUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cp92oRdQd8MgTg82BkC0dSCBdSjc1fMQrMNBLrQHjxk",
  //   },
  // };

  // fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.error("error:" + err));
  const imageURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container mt-5">
      <h1 className="text-center">Movies</h1>
      <div className="row mt-5">
        {data?.data?.results.map((movie, key) => (
          <div className="col-4" key={key}>
            <Link to={`/movie/${movie?.id}`} style={{textDecoration:'none', outline:'none'}}>
              <div className="card card-1" style={{ width: "25rem" }}>
                <img
                  src={`${imageURL}${movie?.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie?.original_title}</h5>
                  <p className="card-text">{movie?.overview}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
