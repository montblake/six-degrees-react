function ActorCard(props) {
    return (
        <div className="actor-card">
            <div className="actor-frame">
                <img className="actor-pic" src={props.actor.image} alt={props.actor ? props.actor.name : 'actor'}/>
            </div>
            
            <p>{props.actor? props.actor.name : ""}</p>
             
        </div>
    )
}

export default ActorCard;