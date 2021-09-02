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
            <section>
                <p>Connect an actor with {props.endpoint.name} with six degrees of separation or less. In the context of this game, a connection is made by one actor working with another on a film.</p>
                <p>Meryl Streep worked with Kevin on the film <span>The River Wild</span>. That's one degree of separation.</p>
                <p>Queen Latifah worked with Catherine Zeta-Jones on the film <span>Chicago</span>. And Catherine Zeta-Jones worked with Julia Roberts on the film <span>Ocean's Twelve</span>. And Julia Roberts worked with Ed Harris on the film <span>Stepmom</span> and Ed Harris worked with Meryl Streep on <span>The Hours</span>who  worked with Kevin on <span>The River Wild.</span> That is five degrees.</p>
                <p>It's easier to play than to describe.</p>
            </section>

            <section id="start-random">
                <p>Start with an actor chosen at random.</p>
                <button onClick={handleRandom} className="random-btn">Begin</button>
            </section>
           
            <section id="start-choice">
                <p>Start with whomever you choose.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="inputName" placeholder="Enter a name" onChange={handleChange} value={inputForm.inputName}></input><br></br>
                    <input type="submit" value="Begin"></input>
                </form>
            </section>
            
            
        </div>
    )
}

export default Starter;