import './styles.css';
import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ControlCenter from './components/ControlCenter';
import FilmStrip from './components/FilmStrip';
import Footer from './components/Footer';
import Starter from './components/Starter';


function App() {
	// const URL = "http://localhost:5000/";
	const URL="https://new-flask-backend-detectives.herokuapp.com/";

	const [endpoint, setEndpoint] = useState({
		name: "Kevin Bacon",
		id: "nm0000102",
		image: "https://m.media-amazon.com/images/M/MV5BOTQxMTEyMjI0NV5BMl5BanBnXkFtZTgwODE4ODAzMjE@._V1_.jpg"
	});

	const [actorObject, setActorObject] = useState({
		0: {
			name: "",
			id: "",
			image: "",
			filmography: []
		},
		1: {
			name: "",
			id: "",
			image: "",
			filmography: []
		},
		2: {
			name: "",
			id: "",
			image: "",
			filmography: []
		},
		3: {
			name: "",
			id: "",
			image: "",
			filmography: []
		},
		4: {
			name: "",
			id: "",
			image: "",
			filmography: []
		},
		5: {
			name: "",
			id: "",
			image: "",
			filmography: []
		},
		6: {
			name: "",
			id: "",
			image: "",
			filmography: []
		}
	});

	const [progArr, setProgArr] = useState([{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
		{
			actorA: "",
			actorB: "",
			film: ""
		},
	]);

	const [actorIndex, setActorIndex] = useState({
		count: 0
	});
	
	const [winner, setWinner] = useState(false);

	
	function updateProgress(actor_name, film_title) {
		console.log('updating progress');
	}


	async function getActorByName(actorName) {
		if (actorName === "") {
			return;
		} else {
			const response = await fetch(URL + 'getactor/' + actorName)
			const data = await response.json();

			setActorObject(prevState => ({
				...prevState,
				[actorIndex.count]:{
					name: data.name,
					id: data.id,
					image: data.image_url,
					filmography: data.filmography
				}
			}));

			checkForWinner(data.id);

			setActorIndex({count: actorIndex.count + 1});
		}
	}

	async function getActorByRandom() {
		const response = await fetch(URL + 'getrandomactor');
		const data = await response.json();
		setActorObject(prevState => ({
			...prevState,
			[actorIndex.count]: {
				name: data.name,
				id: data.id,
				image: data.image_url,
				filmography: data.filmography
			}
		}));

		setActorIndex({count: actorIndex.count + 1});
	}

	async function getFeaturedCast(filmId) {
		const response = await fetch(URL + 'getcast/' + filmId);
		const data = await response.json();
	}

	function handleClick(event) {
        let actor_name = event.target.innerText;
        let film_title = event.target.closest('div').firstChild.innerText
        getActorByName(actor_name);
        // props.updateProgress(actor_name, film_title);
    }

	function checkForWinner(id) {
		console.log(id);
		console.log(endpoint.id);
		if (id === endpoint.id) {
			console.log('You are a winner!');
			setWinner(true);
			return;
		}
		console.log('You have not won yet');
		return;
	}

	return ( 
		<div className = "App" >
			<Header endpoint = {endpoint}/> 
			<Gallery 
				endpoint = {endpoint}
				actorObject = {actorObject}
				actorIndex = {actorIndex}
				winner = {winner}
			/> 
			{
				actorIndex.count === 0 ?
				<> </> 
				: 
				<FilmStrip actor = {actorObject[actorIndex.count - 1]} getFeaturedCast = {getFeaturedCast} getActorByName = {getActorByName} updateProgress ={updateProgress} /> 
			} 

			{
				actorIndex.count === 0 ?
				<Starter getActorByName = {getActorByName} getActorByRandom = {getActorByRandom} /> 
				: 
				<ControlCenter getActorByName = {getActorByName} getActorByRandom = {getActorByRandom} endpoint = {endpoint} progressArray = {progArr} /> 
			}

			<Footer />
		</div>
	);
}

export default App;