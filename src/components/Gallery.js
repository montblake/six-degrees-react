import ActorCard from './ActorCard';
import ControlCenter from './ControlCenter';


function Gallery(props) {
    return (
        <div id="gallery" className="structure-div">
            
            <div id="choice-map">
                <ActorCard actor={props.actorObject[0]}/>
                <ActorCard actor={props.actorObject[1]}/>
                <ActorCard actor={props.actorObject[2]}/>
                <ActorCard actor={props.actorObject[3]}/>
                <ActorCard actor={props.actorObject[4]}/>
                <ActorCard actor={props.actorObject[5]}/>
                <ActorCard actor={props.endpoint}/>
            </div>
            {
				<ControlCenter getActorByName = {props.getActorByName} getActorByRandom = {props.getActorByRandom} endpoint = {props.endpoint} historyArray = {props.historyArray} actorIndex = {props.actorIndex} winner={props.winner} /> 
			}

        </div>
    )
}

export default Gallery;