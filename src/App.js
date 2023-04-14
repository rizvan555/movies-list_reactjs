import "./App.css";
import { Link } from "react-router-dom";
import movies from "./data/movieList";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";

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

  const getSortingFunction = (sortButton) => {
    if (sortButton === "Sort by Date Ascending") {
      return sortAscending;
    } else if (sortButton === "Sort by Date Descending") {
      return sortDescending;
    } else if (sortButton === "Best Rate") {
      return bestRate;
    } else if (sortButton === "A-Z") {
      return atoz;
    } else if (sortButton === "Z-A") {
      return ztoa;
    }
  };

  return (
    <div className="App">
      <header>
        {sortButtons.map((sortButton, index) => {
          return (
            <Link
              to={`/sort/${sortButton}`}
              onClick={getSortingFunction(sortButton)}
              key={index}
            >
              {sortButton}
            </Link>
          );
        })}
      </header>

      <MovieDetails />
    </div>
  );
}

export default App;
