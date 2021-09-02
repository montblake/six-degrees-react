import ActorCard from './ActorCard';
import ControlCenter from './ControlCenter';


function Gallery(props) {
    return (
        <div id="gallery" className="structure-div">
            
            <div id="choice-map">
                <ActorCard actor={props.actorObject[0]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="0" />
                <ActorCard actor={props.actorObject[1]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="1" />
                <ActorCard actor={props.actorObject[2]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="2" />
                <ActorCard actor={props.actorObject[3]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="3" />
                <ActorCard actor={props.actorObject[4]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="4" />
                <ActorCard actor={props.actorObject[5]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="5" />
                <ActorCard actor={props.actorObject[6]} endpoint={props.endpoint} actorIndex={props.actorIndex} index="6" />
                
            </div>
            
			<ControlCenter 
                getActorByName = {props.getActorByName} 
                getActorByRandom = {props.getActorByRandom} 
                endpoint = {props.endpoint} 
                historyArray = {props.historyArray} 
                actorIndex = {props.actorIndex} 
                actorObject= {props.actorObject} 
                winner={props.winner}
                loser={props.loser}
                outOfTime={props.outOfTime}
                timeLeft={props.timeLeft}
				guessesRemain = {props.guessesRemain}
            
            /> 
			

        </div>
    )
}

export default Gallery;