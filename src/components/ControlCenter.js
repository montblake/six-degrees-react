import Instructions from "./Instructions";
import ActorForm from "./ActorForm";

function ControlCenter(props) {
    return (
        <div id="control-center" className="structure-div">
            <Instructions />
            <ActorForm getActorByName={props.getActorByName} getActorByRandom={props.getActorByRandom}/>
        </div>
    )
}

export default ControlCenter;