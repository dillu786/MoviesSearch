import MovieItem from './MovieItem.js';

import MovieListItem from "./MovieListItem";

function SearchMovies(props) {
    console.log('search movies');
    console.log(props);



    props.items.map((item) => {

        return (
            <MovieItem
                key={item.imdbID}
                Title={item.Title}
                Year={item.Year}
                Poster={item.Poster} />
        )

    })








}

export default SearchMovies;