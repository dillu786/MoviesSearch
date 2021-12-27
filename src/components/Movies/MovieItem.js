import { useRef } from 'react';
import './MovieItem.css';
function MovieItem(props) {
    console.log('MovieItem');
    console.log(props);
    const elementref = useRef();
    const handleOnClick = (e) => {
        console.log(e);
        console.log('clicked');
        //console.log(elementref.current);
        props.onImageClick(e);
    }
    return (


        <div className="">

            <div>
                <div className="movie">
                    <img src={props.item.Poster}
                        alt={props.item.imdbID}
                        value={props.item.imdbID}
                        onClick={() => handleOnClick(props.item.imdbID)}
                    />


                </div>
                <div className="movie-info">
                    <h3>{props.item.Title}</h3>



                </div>
            </div>
        </div>

    )



}

export default MovieItem;