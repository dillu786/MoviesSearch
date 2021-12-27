import MovieItem from "./MovieItem.js";
import MItem from "../Splashscreen/MItem.js"


function MovieListItem(props) {
    console.log('MovieListItem')
    console.log(props)
    return (
        <ul>
            {
                props.items.map((movie) => {
                    <MItem
                        key={movie.imdbID}
                        Poster={movie.Poster}
                        Title={movie.Title}
                        Year={movie.Year}
                    />
                }
                )
            }
        </ul>
    )
}

export default MovieListItem;