function Instructions(props){
    return (
        <div id="instructions">
                <h2 className="orange">Feeling Footloose?</h2>
                <ol>
                    <li>Pick an actor to view their filmography</li>
                    <li>Search their films to see who they've worked with.</li>
                    <li>Choose another actor by clicking in the cast lists.</li>
                    <li>Explore <span>that</span> actor's films and who <span>they</span> have worked with.</li>
                    <li>Connect to <span id="endpoint2">Kevin Bacon</span> within six choices.</li>
                    <li>Impress your friends and family.</li>
                </ol>
            </div>
    )
}

export default Instructions;