function Progress(props){
    const renderProgress = () => {
        return <li>{`Browse through ${props.historyArray[props.actorIndex.count].actorA}'s filmography. Have they worked with ${props.endpoint.name}? If not, choose a different actor and keep trying to link up.`}</li>
    }
       
    return (
        <div id="progress" className="cc-component">
            <h3>Progress</h3>
            <ul>
                { props.actorIndex.count ? renderProgress() : "Loading..." }
            </ul>
        </div>
    )
}

export default Progress;