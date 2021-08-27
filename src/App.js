import './styles.css';
import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ControlCenter from './components/ControlCenter';
import FilmStrip from './components/FilmStrip';
import Footer from './components/Footer';


function App() {
  const URL="http://localhost:5000/";
  // const URL="https://new-flask-backend-detectives.herokuapp.com/";

  const [endpoint, setEndpoint] = useState({name: "Kevin Bacon", id: "nm0001234", image:"https://m.media-amazon.com/images/M/MV5BOTQxMTEyMjI0NV5BMl5BanBnXkFtZTgwODE4ODAzMjE@._V1_.jpg"});
  const [actorObject, setActorObject] = useState({
    0: {name: "Gabe Kaplan", id:"nm0023451", image:"", filmography: []},
    1: {name: "", id:"", image:"", filmography: []},
    2: {name: "", id:"", image:"", filmography: []},
    3: {name: "", id:"", image:"", filmography: []},
    4: {name: "", id:"", image:"", filmography: []},
    5: {name: "", id:"", image:"", filmography: []},
    6: {name: "", id:"", image:"", filmography: []}
  });
  const [actorIndex, setActorIndex] = useState(0);


  async function getActorByName(actorName) {
		const response = await fetch(URL + 'getactor/' + actorName)
		const data = await response.json();

    setActorObject(prevState => ({
        ...prevState,
        [actorIndex] : {name: data.name, id: data.id, image: data.image_url, filmography: data.filmography}
      }));
  }

  async function getActorByRandom() {
		const response = await fetch(URL + 'getrandomactor');
		const data = await response.json();
    setActorObject(prevState => ({
        ...prevState,
        [actorIndex] : {name: data.name, id: data.id, image: data.image_url, filmography: data.filmography}
      }));
  }



  return (
    <div className="App">
      <Header endpoint={endpoint} />
      <Gallery endpoint={endpoint} actorObject={actorObject} actorIndex={actorIndex} />
      <ControlCenter getActorByName={getActorByName} getActorByRandom={getActorByRandom} />
      <FilmStrip  actor={actorObject[actorIndex]} />
      <Footer />
    </div>
  );
}

export default App;
