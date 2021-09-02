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
                handleCastClick={props.handleCastClick}
            /> 
        ));
    }
    

    return (
        <div id="film-strip">
            { props.actor ? <h3>The Films of { props.actor.name } ({props.actor.filmography.length})</h3> : <h3>Loading...</h3>}
            
            <div id="film-container">
                   { props.actor ?  renderFilms() : <h3>Loading... </h3>}
            </div>
            
        </div>
    )
}

export default FilmStrip;