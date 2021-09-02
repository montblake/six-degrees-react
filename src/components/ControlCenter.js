import Progress from "./CCProgress";
import Scoreboard from './CCScoreboard';
import Results from './CCResults';


function ControlCenter(props) {
    return (
        <div id="control-center">
            { props.loser === true || props.winner === true ? 
            <Results 
                winner={props.winner} 
                loser={props.loser} 
                guessesRemain={props.guessesRemain} 
                timeLeft={props.timeLeft}
                historyArray={props.historyArray}
                endpoint={props.endpoint}
                actorIndex={props.actorIndex}
            />
            : 
            <Progress 
                endpoint = {props.endpoint} 
                historyArray={props.historyArray} 
                actorIndex = {props.actorIndex} 
                actorObject = {props.actorObject}
                winner={props.winner}
                loser={props.loser}
                outOfTime={props.outOfTime}
                timeLeft={props.timeLeft}
				guessesRemain = {props.guessesRemain}
                />}
                
            
            <Scoreboard 
                actorIndex={props.actorIndex}
                winner={props.winner}
                loser = {props.loser}
                outOfTime={props.outOfTime} 
                timeLeft={props.timeLeft}
            />
            
        </div>
    )
}

export default ControlCenter;