function FilmCard(props) {

    function handleClick(event) {
        let actor_name = event.target.innerText;
        let film_title = event.target.closest('div').firstChild.innerText
        props.getActorByName(actor_name);
        // props.updateProgress(actor_name, film_title);
    }
    

    const castMembers = () => {
        let cast = props.film.featured_cast.split(', ');
        return cast.map(castMember => (
            <li key={castMember} onClick={handleClick} >{castMember}</li>
        ))
    }
    
    async function handleNoCast(film){
        props.getFeaturedCast(film.id);
    }

    return (
        <div className="film-card">
            <h2 id="film-title">{props.film.title}</h2>
            <p className="film-year">{props.film.year}</p>
            <div className="picture-frame">
                <img className="picture-movie" src={props.film.image_url} alt={props.film.title} />
            </div>
            <ul>
                { props.film.featured_cast ? castMembers() : "loading cast"}
            </ul>
        </div>
    )
}

export default FilmCard;