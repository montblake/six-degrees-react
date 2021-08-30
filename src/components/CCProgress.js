function Progress(props){
    const renderProgress = () => {
        // return props.progressArray.map(progressItem => (
        //     <li>{`${progressItem.actorA} worked with ${progressItem.actorB} on the film ${progressItem.film}`}</li>
        // ));
        console.log('rendering progress')
    }

    

    return (
        <div id="progress" className="cc-component">
            {/* <ul>
                { props.progressArray ? {renderProgress} : "Loading..." }
            </ul> */}
        </div>
    )
}

export default Progress;