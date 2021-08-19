import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

function App() {
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

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isLoading: false });
//     }, 6000);
//   }
//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
//   }
// }

export default App;
