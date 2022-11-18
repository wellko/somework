import React, {Component} from 'react';
import {Movie} from "../../types";
import MovieList from "./MovieList";

interface State {
	movies: Movie[];
	newMovie: Movie;
}


class MovieForm extends Component<{}, State> {
	state: State = {
		movies: [],
		newMovie: {
			id: '',
			name: '',
		}
	}

	addMovie = (e: React.FormEvent) => {
		e.preventDefault();
		if (!this.state.movies.includes(this.state.newMovie)){
			this.setState(prev => ({
				...prev,
				movies: [...prev.movies, this.state.newMovie]
			}))
		}
		else {alert('Movie with such id already added')}
	}

	addMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState(prev => ({
			...prev,
			newMovie: {
				name: e.target.value,
				id: Math.random().toString()
			}
		}))
	}

	editMovieName = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
		const index = this.state.movies.findIndex(item => item.id === id)
		this.setState(prev => {
			const itemsCopy = {...prev};
			const itemCopy = {...itemsCopy.movies[index]};
			itemCopy.name = e.target.value;
			itemsCopy.movies[index] = itemCopy;
			return itemsCopy
			}
		)}

	deleteMovie = (id: string) => {
		this.setState(prev => ({
			...prev,
			movies: this.state.movies.filter((result) => {
				return result.id !== id
			})
		}))
	}


	render() {
		return (
			<div>
				<form onSubmit={this.addMovie}>
					<input type='text' onChange={this.addMovieName}/>
					<button type='submit'>Click</button>
				</form>

				{this.state.movies.map((movie, index) => (
					<div key={movie.id}>
						<MovieList id={movie.id} name={movie.name} index={index + 1}
								   inputOnChange={e => this.editMovieName(e, movie.id)}/>
						<button type='button' onClick={() => this.deleteMovie(movie.id)}>X</button>
					</div>
				))}
			</div>
		);
	}
}

export default MovieForm;