function History(props){
    const renderHistory = () => {
        
        return props.historyArray.map(level => {
            if (level.actorA) {
                if (level.actorB && level.film) {
                    return (
                    <li key={`Step${props.actorIndex.count}`}>{`${level.actorA} worked with ${level.actorB} on the film `}<span className="film-title">{level.film}</span></li>
                    )
                } else {
                    return <></>
                }
            } else {
                return <></>
            }
    })
    }     
       
    return (
        <div id="history" className="structure-div">
            <h3>History</h3>
            <ol>
                { props.actorIndex.count ? renderHistory() : "Loading..." }
            </ol>
        </div>
    )
}

export default History;