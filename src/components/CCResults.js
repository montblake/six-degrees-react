function Results(props) {
    function renderVictory(){
        return (
            <div id="results" className="cc-component">
                <h2>You Won!!! You won!!!</h2>
                <p>You connected {props.historyArray.[0].actorA} to {props.endpoint.name} with {props.actorIndex} degrees separation.</p>
            </div>
        )
    }

    function renderDefeat(){
        return (
            <div id="results" className="cc-component">
                <h2>You Lost!!! </h2>
                { props.timeLeft === false ? <p>You ran out of time.</p> : <></>}
                { props.guessesRemain === false ? <p>You have no more chances.</p> : <></>}
            </div>
        )
    }

    return (
        <div>
            { props.winner ? renderVictory() : renderDefeat()}
        </div>
    )
}

export default Results;
