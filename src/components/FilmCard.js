function FilmCard(props) {
    return (
        <div className="film-card">
            <h2>{props.title}</h2>
            <p className="film-year">2013</p>
            <div className="picture-frame">
                <img src="#" alt="film-title" />
            </div>
            <ul>
                <li>Actor One</li>
                <li>Actor Two</li>
                <li>Actor Three</li>
            </ul>
        </div>
    )
}

export default FilmCard;