import Countdown from "./Countdown";

function Scoreboard(props) {
    let gs=""
    if (props.winner) {
        gs ="Winner!!!"
    } else {
        if (props.actorIndex.count === 0) gs = "Ready to Play";
        if (props.actorIndex.count > 0 && props.actorIndex.count < 6) gs = "In Play";
        if (props.actorIndex.count >= 6) gs = "Loser!!!";
    }

    
    

    return (
        <div id="scoreboard">
            <Countdown />
            <div id="game-state" className="scoreboard-component">
                
                GAME STATE: { gs }
                
            </div>
            
            <div id="separation-degree" className="scoreboard-component">
                Degrees Separation: {props.actorIndex.count}
            </div>
            <div id="remaining-guess" className="scoreboard-component">
                Remaining Guesses: {6 - props.actorIndex.count}
            </div>
        </div>
    )
}

export default Scoreboard;
