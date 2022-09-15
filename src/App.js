import Home from "./componentss/Home";
import Navabar from "./componentss/Navabar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./componentss/Moviedetails";
import UpdateMovie from "./componentss/UpdateMovie";
import Searchpage from "./componentss/Searchpage";
import Addmovie from "./componentss/Addmovie";


function App() {
  return (
    <Router>
      <div className="App">
        <Navabar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/add">
            <Addmovie/>
          </Route>

          <Route path="/moviedetails:id">
            <MovieDetails />
          </Route>
          
          {/* <Route path="/404page">
            <Erorrpage/>
          </Route> */}


         <Route path="/search:searchVal">
          <Searchpage/>

         </Route> 
         <Route path="/UpdateMovie">
          <UpdateMovie/>
         </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
