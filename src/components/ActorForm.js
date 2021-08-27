import { useState } from 'react';

function ActorForm(props) {
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
            <h2>Starting Line</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="inputName" placeholder="Enter name to begin search" onChange={handleChange} value={inputForm.inputName}></input>
                <input type="submit" value="submit"></input>
            </form>
            <button onClick={handleRandom}>Start with Random Choice</button>
        </div>
    )
}

export default ActorForm;