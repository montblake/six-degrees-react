import Progress from "./CCProgress";
import Scoreboard from './CCScoreboard';


function ControlCenter(props) {
    return (
        <div id="control-center">
            <Progress endpoint = {props.endpoint} historyArray={props.historyArray} actorIndex = {props.actorIndex} winner={props.winner}/>
            <Scoreboard actorIndex={props.actorIndex} winner={props.winner} />
            
        </div>
    )
}

export default ControlCenter;