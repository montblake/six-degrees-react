function HandleFailure(error){
    return (
        <div id="failure" className="cc_component">
                <h2>Error</h2>
                <p>We apologize for the inconvenience but there has been an error:</p>
                <p>{ error }</p>
            </div>
    )
}

export default HandleFailure;