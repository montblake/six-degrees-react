function History(props){
    
       
    return (
        <div id="history" className="structure-div">
            <h3>History</h3>
            <ol>
                {/* { props.actorIndex > 1 ? <li>{props.historyArray[0].actorA} worked with {props.historyArray[0].actorB} on the film <span className="film-title">{props.historyArray[0].film}</span></li> : <></>} */}

                { props.actorIndex >= 2 ? <li>{props.historyArray[1].actorA} worked with {props.historyArray[1].actorB} on the film <span className="film-title">{props.historyArray[1].film}</span></li> : <></>}

                { props.actorIndex >= 3 ? <li>{props.historyArray[2].actorA} worked with {props.historyArray[2].actorB} on the film <span className="film-title">{props.historyArray[2].film}</span></li> : <></>}

                { props.actorIndex >= 4 ? <li>{props.historyArray[3].actorA} worked with {props.historyArray[3].actorB} on the film <span className="film-title">{props.historyArray[3].film}</span></li> : <></>}

                { props.actorIndex >= 5 ? <li>{props.historyArray[4].actorA} worked with {props.historyArray[4].actorB} on the film <span className="film-title">{props.historyArray[4].film}</span></li> : <></>}
                
                { props.actorIndex >= 6 ? <li>{props.historyArray[5].actorA} worked with {props.historyArray[5].actorB} on the film <span className="film-title">{props.historyArray[5].film}</span></li> : <></>}

                { props.actorIndex >= 7 ? <li>{props.historyArray[6].actorA} worked with {props.historyArray[6].actorB} on the film <span className="film-title">{props.historyArray[6].film}</span></li> : <></>}
                
            </ol>
        </div>
    )
}

export default History;