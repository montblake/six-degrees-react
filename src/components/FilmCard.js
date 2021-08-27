function FilmCard(props) {

    const castMembers = () => {
        let cast = props.film.featured_cast.split(', ');
        return cast.map(castMember => (
            <li key={castMember}>{castMember}</li>
        ))
    }

    return (
        <div className="film-card">
            <h2>{props.film.title}</h2>
            <p className="film-year">{props.film.year}</p>
            <div className="picture-frame">
                <img className="picture-movie" src={props.film.image_url} alt={props.film.title} />
            </div>
            <ul>
                { props.film ? castMembers() : "Loading..." }
            </ul>
        </div>
    )
}

export default FilmCard;