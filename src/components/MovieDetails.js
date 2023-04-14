import movies from "../data/movieList";

const MovieDetails = () => {
  return (
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
  );
};

export default MovieDetails;
