import { useState } from 'react';

function Starter(props) {
    const [inputForm, setInputForm] = useState({inputName: ""})

    function handleSubmit(event){
        event.preventDefault();
        console.log('submit!', inputForm.inputName)
        props.getActorByName(inputForm.inputName);
    }

    function handleChange(event){
        setInputForm({[event.target.name] : event.target.value 
        })
    }

    function handleRandom(event){
        event.preventDefault();
        console.log('Random Request')
        props.getActorByRandom()
    }

    return (
        <div className="actor-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="inputName" placeholder="Enter an actor's name to begin" onChange={handleChange} value={inputForm.inputName}></input><br></br>
                <input type="submit" value="submit your choice"></input>
                <p>OR</p>
                <button onClick={handleRandom} className="random-btn">begin with an actor picked at random</button>
            </form>
            
        </div>
    )
}

export default Starter;