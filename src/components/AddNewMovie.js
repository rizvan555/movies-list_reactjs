import { useState } from "react";
import movies from "../data/movieList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewMovieForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100vh;
  gap: 20px;
  input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    width: 30vw;
    height: 20px;
  }
  select {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    height: 40px;
  }
  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2ecc71;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  a {
    color: #fff;
    font-size: 20px;
  }
`;

const AddNewMovie = ({ setData }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    year: "",
    rate: "",
    genre: "",
  });
  const addNewMovie = (e) => {
    e.preventDefault();
    const newMovieId = movies.length + 1;
    const updateMovieList = [...movies, { ...newMovie, id: newMovieId }];
    setData(updateMovieList);
    setNewMovie({
      title: "",
      director: "",
      year: "",
      rate: "",
      genre: "",
    });
  };

  return (
    <>
      <NewMovieForm>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Director"
          value={newMovie.director}
          onChange={(e) =>
            setNewMovie({ ...newMovie, director: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Year"
          value={newMovie.year}
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rating"
          value={newMovie.rate}
          onChange={(e) => setNewMovie({ ...newMovie, rate: e.target.value })}
        />
        <button onClick={addNewMovie} type="submit">
          Add Movie
        </button>

        <Link to="/">Back to Homepage</Link>
      </NewMovieForm>
    </>
  );
};

export default AddNewMovie;
