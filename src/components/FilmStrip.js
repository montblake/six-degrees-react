import FilmCard from "./FilmCard";
import { useEffect, useState } from 'react';


function FilmStrip(props) {

    const [filmography, setFilmography] = useState(null)

    useEffect(() => {
        setFilmography(props.actor.filmography);
    }, []);
    
    const renderFilms = () => {
        return props.actor.filmography.map(film => (
            <FilmCard film={film} key={film.id}/>
        ));
    }
    

    return (
        <div id="film-strip">
            <div id="film-container">
                { filmography ?  renderFilms() : "Loading..." }
            </div>
            <h3>The Films of { props.actor.name }</h3>
        </div>
    )
}

export default FilmStrip;