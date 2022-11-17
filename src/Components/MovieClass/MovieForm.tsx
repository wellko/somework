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
		this.setState(prev => ({
			...prev,
			movies: [...prev.movies, this.state.newMovie]
		}))
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

	editMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.state.movies.filter(result => result.id === '2')[0].name = e.target.value;
	}

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
						<MovieList id={movie.id} name={movie.name} index={index + 1} inputOnChange={this.editMovieName}/>
						<button type='button' onClick={() => this.deleteMovie(movie.id)}>X</button>
					</div>
				))}
			</div>
		);
	}
}

export default MovieForm;