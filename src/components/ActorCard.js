function ActorCard(props) {

    return (
        <div className="actor-card">
            { props.actor.name !== "" ? 
            <>
                <div className="actor-frame ">
                    <img className="actor-pic" src={props.actor.image} alt="Mystery"/>
                </div> 
                <p className="">{props.actor.name !== "" ? props.actor.name : props.index}</p>
            </>
            :
            <>
                <div className="actor-frame mystery-card">
                    <img className="actor-pic" src={props.endpoint.image} alt="Mystery"/>
                </div>
                <p className="mystery-card">{props.actor.name !== "" ? props.actor.name : props.index}</p>
            </>
            }
                
            </div>
    )
    
}

export default ActorCard;