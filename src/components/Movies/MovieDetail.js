
import './MovieItem.css'
function MovieDeatil(props) {

    return (

        <div className="">

            <div className="movie">

                <img src={props.item[0].Poster}
                    alt={props.item[0].imdbID}
                    value={props.item[0].imdbID}
                //onClick={() => handleOnClick(props.item.imdbID)}
                />



                <div className="movie-info">
                    <h3>{props.item[0].Title}</h3>
                    <h3>{props.item[0].Year}</h3>

                </div>
                <div className="movie-over">
                    <h2>Genre:
                        <p>{props.item[0].Genre}</p>
                    </h2>
                    <h2>ImdbRating:
                        {props.item[0].imdbRating} </h2>
                    <h2>RunningTime:
                        {props.item[0].Runtime}
                    </h2>
                    <h2>Plot:
                        <p>{props.item[0].Plot}</p>
                    </h2>
                    <h2>Actors:
                        <p>{props.item[0].Actors}</p>
                    </h2>
                    <h2>Writers:
                        <p>{props.item[0].Writer}</p>
                    </h2>
                </div>
            </div>
        </div>



    )
}

export default MovieDeatil;