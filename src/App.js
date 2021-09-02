import './styles.css';
import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import FilmStrip from './components/FilmStrip';
import Footer from './components/Footer';
import Starter from './components/Starter';
import History from './components/History';



function App() {
	// const URL = "http://localhost:5000/";
	const URL="https://six-degrees-flask.herokuapp.com/";
	
	const [endpoint, setEndpoint] = useState({
		name: "Kevin Bacon",
		id: "nm0000102",
		image: "https://m.media-amazon.com/images/M/MV5BOTQxMTEyMjI0NV5BMl5BanBnXkFtZTgwODE4ODAzMjE@._V1_.jpg"
	});

	const actObj = {
		0: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		},
		1: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		},
		2: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		},
		3: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		},
		4: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		},
		5: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		},
		6: {
			name: "",
			id: "",
			image: endpoint['image'],
			filmography: []
		}
	}
	
	const histArr = [
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
	]
	
	const bacon = {
		name: "Kevin Bacon",
		id: "nm0000102",
		image: "https://m.media-amazon.com/images/M/MV5BOTQxMTEyMjI0NV5BMl5BanBnXkFtZTgwODE4ODAzMjE@._V1_.jpg"
	}
	

	//////////////////////////////////////////////
	// STATE
	//////////////////////////////////////////////
	

	const [actorObject, setActorObject] = useState(actObj);

	const [historyArr, setHistoryArr] = useState(histArr);

	const [actorIndex, setActorIndex] = useState({
		count: 0
	});
	
	const [winner, setWinner] = useState(false);


	//////////////////////////////////////////////
	// FUNCTIONS
	//////////////////////////////////////////////

	function updateProgress(actor_name, film_title) {
		if (actorIndex.count === 1) {
			historyArr[0].actorA = actorObject[0].name;
		}
		historyArr[actorIndex.count - 1].actorB = actor_name;
		historyArr[actorIndex.count].actorA = actor_name;
		historyArr[actorIndex.count -1].film = film_title;
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
		console.log('would you like me to get the cast list?');
		// const response = await fetch(URL + 'getcast/' + filmId);
		// const data = await response.json();
	}

	function handleCastClick(event) {
        let actor_name = event.target.innerText;
        let film_title = event.target.closest('div .film-card').firstChild.innerText
        getActorByName(actor_name);
        updateProgress(actor_name, film_title);
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

	async function changeEndpoint() {
		console.log("setting endpoint!!!")
		const response = await fetch(URL + 'getrandomactor');
		const data = await response.json();
		setEndpoint({
			name: data.name,
			id: data.id,
			image: data.image_url,
		})
		const bodyElem = document.body.style.backgroundImage = `url(${data.image_url})`;
	}

	function resetGame() {
		
		console.log('resetting');
		setActorIndex(0);
		setEndpoint(bacon);
		setActorObject(actObj);
		setHistoryArr(histArr);
		setWinner(false);
		
	}

	return ( 
		<div className = "App" >
			<Header endpoint = {endpoint}  changeEndpoint={changeEndpoint} resetGame={resetGame} /> 
			{
				actorIndex.count === 0 ?
				<main>
					<Starter 
						getActorByName = {getActorByName} 
						getActorByRandom = {getActorByRandom}
						endpoint={endpoint}
						changeEndpoint={changeEndpoint}
					/> 
				</main>
				: 
				<main>
					<Gallery 
						endpoint = {endpoint}
						actorObject = {actorObject}
						actorIndex = {actorIndex}
						winner = {winner}
						historyArray = {historyArr}
					/>
					<FilmStrip 
						actor = {actorObject[actorIndex.count - 1]} 
						getFeaturedCast = {getFeaturedCast} 
						getActorByName = {getActorByName}
						handleCastClick={handleCastClick} 
					/> 
					<History 
						endpoint = {endpoint} 
						historyArray={historyArr} 
						actorIndex = {actorIndex} 
					/>
				</main>
				
			} 

			

			<Footer />
		</div>
	);
}

export default App;