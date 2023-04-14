import styled from "styled-components";
import movies from "../data/movieList";
import { useState } from "react";
import MovieDetails from "./MovieDetails";

const SearchFormStyled = styled.form`
  display: flex;
  gap: 20px;
  input {
    width: 40vw;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
  button {
    width: 10vw;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
  margin-top: 10px;
  height: 100%;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
`;
const SearchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [searchText, setSearchText] = useState("");

  const searchData = (e) => {
    e.preventDefault();
    const movieFind = movies.find((myMovie) => myMovie.title === searchText);
    if (movieFind) {
      setMovie(movieFind);
    } else {
      setMovie(null);
    }
  };

  return (
    <>
      <SearchFormStyled onSubmit={searchData}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchFormStyled>
      {movie && (
        <SearchResult>
          <p className="title">{movie.title}</p>
          <p>{movie.director}</p>
          <p>Year: {movie.year}</p>
          <p>⭐️ {movie.rate}</p>
        </SearchResult>
      )}
    </>
  );
};

export default SearchMovie;
