function Header(props) {

    function handleChangeRequest(event){
        event.preventDefault();
        props.changeEndpoint();
    }

    function handleReset(){
        window.location.reload(false);
    }

    return (
        <header id="header" className="structure-div">
            <div className="logo">
                <h1>Six Degrees of { props.endpoint.name }</h1> 
                <i className="fas fa-brain-circuit"></i>
            </div>
            <div className="options">
                <button onClick={handleChangeRequest}>Replace { props.endpoint.name.split(' ')[0] }</button>
                {/* <button>Change Color</button> */}
                {/* <button>Undo Last</button> */}
                <button onClick={handleReset}>Reset All</button>
            </div>
        </header>
    )
}

export default Header;