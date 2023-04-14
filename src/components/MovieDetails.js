import styled from "styled-components";
import movies from "../data/movieList";
import { useState } from "react";

const MovieStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  .movie-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 15vw;
    padding: 20px 10px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    list-style-type: none;
    border-radius: 5px;
  }
  .title {
    font-weight: bold;
    color: #e5e5e5;
  }
  .genre {
    font-size: 12px;
  }
  .genre p {
    background-color: red;
    padding: 5px;
    width: 12vw;
    border-radius: 5px;
  }
`;

const MovieDetails = () => {

  return (
    <MovieStyled>
      {movies.map((movie, title) => {
        return (
          <div className="movie-box" key={title}>
            <li className="title">{movie.title}</li>
            <li>Year: {movie.year}</li>
            <li>{movie.director}</li>
            <li>{movie.duration}</li>
            <li>⭐️ {movie.rate}</li>
            <li className="genre">
              {movie.genre.map((genre, index) => (
                <p key={index}>{genre}</p>
              ))}
            </li>
          </div>
        );
      })}
    </MovieStyled>
  );
};

export default MovieDetails;
