import Countdown from "./Countdown";

function Scoreboard(props) {
    return (
        <div id="scoreboard">
            { props.timeLeft === true && props.loser === false && props.winner === false ? 
            <Countdown outOfTime={props.outOfTime} winner={props.winner} loser={props.loser}/>
            :
            <></>
            }
            
    
            
            {/* <div id="separation-degree" className="scoreboard-component">
                <h3>Degrees<br/>Separation</h3>
                { props.actorIndex === 1 ? <p>Infinite</p>:<p>{props.actorIndex - 1} and counting</p>}
                
            </div> */}
            <div id="remaining-guess" className="scoreboard-component">
                <h3>Chances<br/>Remaining</h3>
                <p>{7 - props.actorIndex}</p>
            </div>
        </div>
    )
}

export default Scoreboard;
