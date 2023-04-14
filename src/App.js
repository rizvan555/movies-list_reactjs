import { Link } from "react-router-dom";
import movies from "./data/movieList";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";
import styled from "styled-components";

const AppStyled = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  header {
    display: flex;
    gap: 5vw;
  }
  header a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 5px 10px;
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    width: 9vw;
    text-align: center;
    :hover {
      font-weight: bold;
    }
  }
`;

function App() {
  const [data, setData] = useState([]);
  const [sortButtons, setSortButtons] = useState([
    "Date Ascending",
    "Date Descending",
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
    if (sortButton === "Date Ascending") {
      return sortAscending;
    } else if (sortButton === "Date Descending") {
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
    <AppStyled>
      <HeaderStyled>
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
      </HeaderStyled>
      <MovieDetails />
    </AppStyled>
  );
}

export default App;
