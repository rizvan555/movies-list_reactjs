import { Link, Navigate, Route, Routes } from "react-router-dom";
import movies from "./data/movieList";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";
import styled from "styled-components";
import SearchMovie from "./components/SearchMovie";
import AddNewMovie from "./components/AddNewMovie";

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.8);
  .addMovie {
    color: #fff;
    text-decoration: none;
    background-color: tomato;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    :hover {
      font-weight: bold;
    }
  }
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  header {
    display: flex;
    gap: 5vw;
  }
  header button {
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
    width: 10vw;
    text-align: center;
    background-color: rgb(0, 0, 0, 0.3);
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchMovie />
              <Link className="addMovie" to="/addNewMovie">
                Add New Movie
              </Link>
              <HeaderStyled>
                <header>
                  {sortButtons.map((sortButton, index) => {
                    return (
                      <button
                        to={`/sort/${sortButton}`}
                        onClick={getSortingFunction(sortButton)}
                        key={index}
                      >
                        {sortButton}
                      </button>
                    );
                  })}
                </header>
              </HeaderStyled>
              <MovieDetails />
            </>
          }
        />
        <Route
          path="/addNewMovie"
          element={<AddNewMovie setData={setData} data={data} />}
        />
      </Routes>
    </AppStyled>
  );
}

export default App;
