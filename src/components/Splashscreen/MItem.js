
import '../Movies/MovieItem.css'
function MItem(props) {
    console.log('MovieItem');
    console.log(props);
    return (


        <li className="">

            <div>
                <div className="">
                    <img src={props.Poster} alt={props.Title} />
                </div>
                <div className="">

                    <h3>{props.Title}</h3>
                    <h4>{props.Year}</h4>

                </div>
            </div>
        </li>

    )



}

export default MItem;