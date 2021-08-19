import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import Navigation from "../components/Navigation";

function Home() {
  const [isLoading, changeState] = useState(true);
  const [movies, setMovies] = useState([]);

  //wait until getting api is done
  async function getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    setMovies(movies);
    changeState(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          <Navigation />
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Home;
