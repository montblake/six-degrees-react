function Progress(props){
    const renderProgress = () => {
        return (
            <ul>
                <li>{`Browse ${props.actorObject[props.actorIndex.count -1].name}'s filmography.`}</li>
                <li>Click on movie posters to reveal featured cast.</li>
                <li>Click on a name to connect to the next actor.</li> 
            </ul>
        )
    }
       
    return (
        <div id="progress" className="cc-component">
            <h3>Next<br/>Actions</h3>
            { props.actorIndex.count >= 1 ? renderProgress() : "Loading..." }
        </div>
    )
}

export default Progress;