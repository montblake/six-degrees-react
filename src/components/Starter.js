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
        <div className="starter">
            <section id="intro-text">
                <p id="citation">According to <span>Wikipedia</span>:</p>
                <p>"Six Degrees of {props.endpoint.name}  or {props.endpoint.name.split(' ')[1]} 's Law is a parlor game where players challenge each other to arbitrarily choose an actor and then connect them to another actor via a film that both actors have appeared in together, repeating this process to try and find the shortest path that ultimately leads to prolific American actor Kevin Bacon.</p>
                <p>It rests on the assumption that anyone involved in the Hollywood film industry can be linked through their film roles to Bacon within six steps.</p>
                <p>The game's name is a reference to "six degrees of separation", a concept which posits that any two people on Earth are six or fewer acquaintance links apart."</p>
            </section>

            <section id="start-random">
                <p>Let us choose an actor for you.</p>
                <button onClick={handleRandom} className="random-btn">Begin</button>
            </section>
            <p id="connector">or...</p>

            <section id="start-choice">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="inputName" placeholder="Choose your own actor..." onChange={handleChange} value={inputForm.inputName}></input><br></br>
                    <input type="submit" value="Begin"></input>
                </form>
            </section>
            
            
        </div>
    )
}

export default Starter;