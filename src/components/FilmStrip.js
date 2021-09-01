import FilmCard from "./FilmCard";


function FilmStrip(props) {

    
    const renderFilms = () => {
        return props.actor.filmography.map(film => (
            <FilmCard 
                film={film} 
                key={film.id} 
                getActorByName={props.getActorByName}
                updateProgress={props.updateProgress}
                getFeaturedCast={props.getFeaturedCast}
                handleClick={props.handleClick}
            /> 
        ));
    }
    

    return (
        <div id="film-strip">

            <h3>The Films of { props.actor.name } ({props.actor.filmography.length})</h3>
            <div id="film-container">
                   { props.actor.filmography ?  renderFilms() : "Loading..." }
            </div>
            
        </div>
    )
}

export default FilmStrip;