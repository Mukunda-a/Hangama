import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const UpdateMovie = ({movie , id}) => {

    let history=useHistory()


    let [movieName, setmovieName] = useState(movie.movieName)
    let [hero, sethero] = useState(movie.hero)
    let [director, setdirector] = useState(movie.director)
    let [genere, setgenere] = useState(movie.genere)

    let handleSubmit=(e)=>{
        e.preventDefault();

        let updatedMovie = {movieName, hero, director, genere}


        fetch(`http://localhost:4000/moviesList/${id}`,
        {method:"PUT", headers:{"Accept":"application/json","Content-Type":"application/json"}, body: JSON.stringify(updatedMovie) } )
        .then(()=>{history.push("/")})
    }


    return ( 
        
        <div className="add-movie">
            <h1>Update Movie</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                
                <div>

                    <label> Movie Name :</label> 
                    <input type="text" value={movieName} onChange={(e)=>{setmovieName(e.target.value);}} />

                    <label> Hero :</label> 
                    <input type="text" value={hero} onChange={(e)=>{sethero(e.target.value);}} />

                    <label> Director :</label> 
                    <input type="text" value={director} onChange={(e)=>{setdirector(e.target.value);}} />

                    <label> Genere :</label> 
                    <input type="text" value={genere} onChange={(e)=>{setgenere(e.target.value);}} />
                
                </div>

                <input type="Submit" value="update Movie" />
                
            </form>
        </div>
     );
}
 
export default UpdateMovie;