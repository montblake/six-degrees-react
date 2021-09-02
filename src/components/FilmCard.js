import { useState } from 'react';

function FilmCard(props) {    

    const [showCast, setShowCast] = useState(false);

    const castMembers = () => {    
        const cast = props.film.featured_cast.split(', ');
        return cast.map(castMember => (
                <li key={castMember} onClick={props.handleCastClick} >{castMember}</li>
        ))
    }
    
    async function handleNoCast(film){
        props.getFeaturedCast(film.id);
    }

    function toggleCast(event) {
        setShowCast(!showCast);
    }

    return (
        <div className="film-card">
            <h2 id="film-title">{props.film.title}</h2>
            <p className="film-year">{props.film.year}</p>
            { showCast ? 
                <div className="cast">
                    <h4>Cast</h4>
                    <ul>
                        { props.film.featured_cast ? castMembers() : "loading cast"}
                    </ul>
                    <button className="cast-close-btn" onClick={toggleCast} >close cast list</button>
                </div>
            :
                <div className="picture-frame" onClick={toggleCast}>
                    <img className="picture-movie" src={props.film.image_url} alt={props.film.title} />
                </div>
            } 
                        
        </div>
    )
}

export default FilmCard;