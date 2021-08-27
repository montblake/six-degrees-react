import FilmCard from "./FilmCard";

function FilmStrip(props) {
    return (
        <div id="film-strip" className="structure-div">
            FilmStrip
            <div id="film-container">
                <FilmCard title="This Film!"/>
                <FilmCard title="That Film!"/>
                <FilmCard title="The Film!"/>
                <FilmCard title="Thy Film!"/>
                <FilmCard title="Third Film!"/>
                <FilmCard title="Tenth Film!"/>
            </div>
            <h3>The Films of { props.actor }</h3>
        </div>
    )
}

export default FilmStrip;