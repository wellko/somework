import React, {useEffect, useState} from 'react';
import {Joke} from "../../types";
import JokesBlock from "./JokesBlock";

const Jokes = () => {
	const [count, setCount] = useState(0)
	const [jokes, setJokes] = useState<Joke>({
		categories: [],
		created_at: '',
		icon_url: '',
		id: '',
		updated_at: '',
		url: '',
		value: '',
	})
	const url = 'https://api.chucknorris.io/jokes/random'
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url);
			if (response.ok) {
				const joke: Joke = await response.json();
				setJokes(joke);
			}
		};
		fetchData().catch(e => console.error(e));
	}, [count]);
	return (
		<div>
			<button type='button' onClick={() => setCount(prev => prev + 1) }> New Joke</button>
			<JokesBlock categories={jokes.categories} created_at={jokes.created_at} icon_url={jokes.icon_url}
						id={jokes.id} updated_at={jokes.updated_at} url={jokes.url} value={jokes.value}/>
		</div>
	);
};

export default Jokes;