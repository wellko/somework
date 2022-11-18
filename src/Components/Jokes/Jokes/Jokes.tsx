import React, {useEffect, useState} from 'react';
import {Joke, JokeMutation} from "../../../types";
import JokesBlock from "../JokesBlock/JokesBlock";
import ButtonForJoke from "../ButtonForJoke/ButtonForJoke";

const Jokes = () => {
	const [jokes, setJokes] = useState<JokeMutation[]>([]);

	const getJokes = () => {
		const fetchData = async () => {
			const response = await fetch(url);
			if (response.ok) {
				const joke: Joke = await response.json();
				const result: JokeMutation = {
					value: joke.value
				}
				setJokes(prev => [...prev, result]);
			}
		};
		fetchData().catch(e => console.error(e));
	};

	const url = 'https://api.chucknorris.io/jokes/random';

	useEffect(() => {
		getJokes();
	}, [])

	return (
		<div>
			<ButtonForJoke onClick={getJokes}/>
			<JokesBlock jokes={jokes}/>
		</div>
	);
};

export default Jokes;