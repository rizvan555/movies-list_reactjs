import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import movies from "./data/movieList";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [sortButtons, setSortButtons] = useState([
    "Sort by Date Ascending",
    "Sort by Date Descending",
    "Best Rate",
    "A-Z",
    "Z-A",
  ]);

  const sortAscending = () => {
    const result = movies.sort((a, b) => a.year - b.year);
    setData([result]);
  };

  const sortDescending = () => {
    const result = movies.sort((a, b) => b.year - a.year);
    setData([result]);
  };

  const bestRate = () => {
    const result = movies.sort((a, b) => b.rate - a.rate);
    setData([result]);
  };

  const atoz = () => {
    const result = movies.sort((a, b) => a.title.localeCompare(b.title));
    setData([result]);
  };

  const ztoa = () => {
    const result = movies.sort((a, b) => b.title.localeCompare(a.title));
    setData([result]);
  };

  const getSortingFunction = (sortButtonText) => {
    switch (sortButtonText) {
      case "Sort by Date Ascending":
        return sortAscending;
      case "Sort by Date Descending":
        return sortDescending;
      case "Best Rate":
        return bestRate;
      case "A-Z":
        return atoz;
      case "Z-A":
        return ztoa;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        {sortButtons.map((sortButton, index) => {
          const onClickFunction = getSortingFunction(sortButton);
          return (
            <Link
              to={`/sort/${sortButton}`}
              onClick={() => onClickFunction()}
              key={index}
            >
              {sortButton}
            </Link>
          );
        })}
      </header>

      <ul>
        {movies.map((movie, title) => {
          return (
            <div className="movie-box" key={title}>
              <li>{movie.title}</li>
              <li>{movie.year}</li>
              <li>{movie.director}</li>
              <li>{movie.duration}</li>
              <li>{movie.rate}</li>
              <li className="genre">
                {movie.genre.map((genre, index) => (
                  <p key={index}>{genre}</p>
                ))}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
