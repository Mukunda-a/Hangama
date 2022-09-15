import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Addmovie = () => {
  const [hero, setHero] = useState("");
  const [movieName, setmovieName] = useState("");
  const [director, setDirector] = useState("");
  const [genere, setGenere] = useState("");

  let { data: movies } = useFetch("http://localhost:4000/moviesList");


  let history = useHistory();

  let submitHandle = (e) => {
    e.preventDefault();

    let movie = { movieName, hero, director, genere }

    let res = movies.some((m) => { return (m.movieName === movieName) })

    if (res === false) {
      fetch("http://localhost:4000/moviesList",
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(movie) })
        .then(() => { history.push("/") })
        .then(() => { alert("Movie Successfully Added") })
    } else {
      alert("Movie Already Exist Please Try Another Movie")
    }

  }


  return (
    <div className="add-movie">
      <h1>Add the New Movie</h1>
      <hr />
      <form onSubmit={submitHandle}>
        <div>
          <label>Movie Name :</label>
          <input type="text" value={movieName} onChange={(e) => { setmovieName(e.target.value); }} />

          <label>Hero :</label>
          <input
            type="text"
            value={hero}
            onChange={(e) => {
              setHero(e.target.value);
            }}
          />

          <label>Director :</label>
          <input
            type="text"
            value={director}
            onChange={(e) => {
              setDirector(e.target.value);
            }}
          />

          <label>Genere :</label>
          <input
            type="text"
            value={genere}
            onChange={(e) => {
              setGenere(e.target.value);
            }}
          />
        </div>
        <input type="Submit" value="Add Movie" />
      </form>
    </div>
  );
};

export default Addmovie;
