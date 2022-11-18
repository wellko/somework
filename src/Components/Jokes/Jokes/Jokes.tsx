import React, {useEffect, useState} from 'react';
import {Joke, JokeMutation} from "../../../types";
import JokesBlock from "../JokesBlock/JokesBlock";
import ButtonForJoke from "../ButtonForJoke/ButtonForJoke";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const Jokes = () => {
	const [jokes, setJokes] = useState<JokeMutation[]>([]);

	const url = 'https://api.chucknorris.io/jokes/random';

	const fetchGet = async () => {
		const response = await fetch(url);
		if (response.ok) {
			const joke: Joke = await response.json();
			const result: JokeMutation = {
				value: joke.value
			}
			return result
	}
		return {
			value: ''
		}
	}

	const Promises = Promise.all([fetchGet(), fetchGet(), fetchGet(),fetchGet(),fetchGet()])

	useEffect(() => {
		Promises.then(result =>  setJokes(result)).catch(error);
	},[] )

	return (
		<div>
			<ButtonForJoke onClick={()=> Promises.then(result =>  setJokes(result)).catch(error)}/>
			<JokesBlock jokes={jokes}/>
		</div>
	);
};

export default Jokes;