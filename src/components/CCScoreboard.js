import Countdown from "./Countdown";
import { useState } from 'react';

function Scoreboard(props) {
    const [timeRemaining, setTimeRemaining] = useState(true);

    let gs=""
    if (props.winner) {
        gs ="Winner!!!"
    } else {
        if (props.actorIndex.count > 0 && props.actorIndex.count < 6 && timeRemaining) gs = "In Play";
        if (props.actorIndex.count >= 6 || timeRemaining === false) gs = "Loser!!!";
    }

    function timesUp(){
        setTimeRemaining(false);
    }
    

    return (
        <div id="scoreboard">
            <Countdown timeRemaining={timeRemaining} timesUp={timesUp} />
    
            
            <div id="separation-degree" className="scoreboard-component">
                <h3>Degrees<br/>Separation</h3>
                <p>{props.actorIndex.count}</p>
            </div>
            <div id="remaining-guess" className="scoreboard-component">
                <h3>Chances<br/>Remaining</h3>
                <p>{6 - props.actorIndex.count}</p>
            </div>
        </div>
    )
}

export default Scoreboard;
