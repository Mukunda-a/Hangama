import Movieslist from "./Movieslist";
import useFetch from "./useFetch";


const Home = () => {

    let {data:movies,pending,error} = useFetch("http://localhost:4000/Movieslist");
    
    

    return (
        <div className="home-content">

            { error && <h1> {error} </h1>}


            { pending && <div className="loader">   </div> }
            
            { movies &&  <Movieslist movies={movies} title="All Movies" />}

        </div>
    );
}
export default Home;