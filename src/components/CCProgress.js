function Progress(props){
    const renderProgress = () => {
        return (
            <ul>
                <li><h2>{`Browse ${props.actorObject[props.actorIndex -1].name}'s filmography.`}</h2></li>
                <li>Click movie posters to reveal featured cast.</li>
                <li>Click a name to select the actor.</li> 
            </ul>
        )
    }
       
    return (
        <div id="progress" className="cc-component">
            <h3>Next<br/>Actions</h3>
            { props.actorIndex >= 1 ? renderProgress() : "Loading..." }
        </div>
    )
}

export default Progress;