import { Link } from "react-router-dom";

const Movieslist = ({ movies, title }) => {
  return (
    <div className="movie-list">
      <h1 className="title">{title}</h1>
      {movies.map((movie) => {
        return (
          <Link to={`/moviedetails${movie.id}`}>
            <div key={movie.id} className="movie">
              <h1> Movie Name : {movie.movieName} </h1>
              <h2> Hero : {movie.hero} </h2>
              <h2> Genere : {movie.genere} </h2>
              <h2>Poster:{movie.poster}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Movieslist;
