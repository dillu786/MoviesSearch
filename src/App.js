import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import SplashScreen from './components/Splashscreen/SplashScreen';
import MovieItem from './components/Movies/MovieItem';
import MovieListItem from './components/Movies/MovieListItem';
import SearchMovies from './components/Movies/SearchMovies';
import MovieDeatil from './components/Movies/MovieDetail';


function App() {
  const [loading, setloading] = useState(true);
  const [loadedmovies, setloadedmovies] = useState([]);
  const [term, setterm] = useState('');
  const [singlemovie, setsinglemovie] = useState([]);

  useEffect(() => {

    setloading(true);
    // setTimeout(() => {
    //   setloading(true)
    // }, 80000000000000000
    // )
    setsinglemovie([]);

    fetch("http://www.omdbapi.com/?apikey=b9bd48a6&s={Avengers}").then(response => {
      return response.json()
    }).then(
      data => {
        const movies = [];
        for (let movie of data.Search) {

          console.log(movie.Poster);

          const movieobj = {
            id: movie.imdbID,
            ...movie
          }
          movies.push(movieobj);
        }
        setloading(false);
        setloadedmovies(movies);
      }
    )

  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setsinglemovie([]);
    fetch("http://www.omdbapi.com/?apikey=b9bd48a6&s={" + term + "}").then(response => {
      return response.json()
    }).then(
      data => {
        const movies = [];
        for (let movie of data.Search) {

          console.log(movie.Poster);

          const movieobj = {
            id: movie.imdbID,
            ...movie
          }
          movies.push(movieobj);
        }
        setloading(false);
        setloadedmovies(movies);
        setterm("");
      }
    )
  }
  const handleImageClick = (e) => {
    console.log(e);
    console.log('handleimage');
    fetch("http://www.omdbapi.com/?apikey=b9bd48a6&i=" + e + "").then(response => {
      return response.json()
    }).then(
      data => {
        const movies = [];


        //console.log(movie.Poster);

        const movieobj = {
          id: data.imdbID,
          ...data
        }
        movies.push(movieobj);
        setsinglemovie(movies);
        setloading(false);
        setloadedmovies([]);
        setterm();

      })





  }

  const handleOnChange = (e) => {
    setterm(e.target.value);

  }
  //if (loading)
  //   return <SplashScreen />
  // else
  return (
    <>
      {loading && <SplashScreen />}
      {!loading &&
        <header>
          <form onSubmit={handleOnSubmit}>
            <input type="text"
              placeholder="Search....."
              type="Search"
              value={term}
              onChange={handleOnChange} />
          </form>
        </header>
      }
      <div className="movie-container">
        {singlemovie.length > 0 && <MovieDeatil item={singlemovie} />}
        {loadedmovies.length > 0 &&
          loadedmovies.map((item) => {
            return (
              <MovieItem

                key={item.imdbID}
                item={item}
                onImageClick={handleImageClick} />
            )

          })


        }




      </div>
    </>
  );
}


export default App;
