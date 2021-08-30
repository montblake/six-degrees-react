import ActorCard from './ActorCard';
import Scoreboard from './Scoreboard';

function Gallery(props) {
    return (
        <div id="gallery" className="structure-div">
            
            <Scoreboard actorIndex={props.actorIndex} winner={props.winner} />

            <div id="choice-map">
                <ActorCard actor={props.actorObject[0]}/>
                <ActorCard actor={props.actorObject[1]}/>
                <ActorCard actor={props.actorObject[2]}/>
                <ActorCard actor={props.actorObject[3]}/>
                <ActorCard actor={props.actorObject[4]}/>
                <ActorCard actor={props.actorObject[5]}/>
                <ActorCard actor={props.endpoint}/>
            </div>

        </div>
    )
}

export default Gallery;