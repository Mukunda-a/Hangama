import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UpdateMovie from "./UpdateMovie";
import useFetch from "./useFetch";
// import game1 from "./images/game1.jpg"


const MovieDetails = () => {
  let history = useHistory();

  let [update, setupdate] = useState(false);
  let { id } = useParams();

  let {
    data: movie,
    pending,
    error,
  } = useFetch(`http://localhost:4000/moviesList/${id}`);

  let handleDelete = (id) => {
    fetch(`http://localhost:4000/moviesList/${id}`, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };

  return (
    <div>
      {error && <h1> {error} </h1>}

      {pending && <div className="loader"> </div>}

      {!update && movie && (
        <div className="moviv-details">
          <h1>{movie.movieName} </h1>

          <h1> {movie.hero} </h1>

          <h1> {movie.director} </h1>

          <h1> {movie.genere} </h1>
          

          <button
            onClick={() => {
              handleDelete(movie.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setupdate(true);
            }}
          >
            {" "}
            Update{" "}
          </button>
        </div>
      )}

      {update && <UpdateMovie movie={movie} id={id} />}
    </div>
  );
};

export default MovieDetails;
