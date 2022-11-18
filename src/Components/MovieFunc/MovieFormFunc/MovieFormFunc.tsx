import React, {useState} from 'react';
import {Movie} from "../../../types";
import MovieListFunc from "../MovieListFunc/MovieListFunc";


interface State {
    movies: Movie[];
    newMovie: Movie;
}


const MovieFormFunc = () => {

    const [state, setState] = useState<State>({
        movies: [],
        newMovie: {
            id: '',
            name: '',
        }
    })

    const addMovie = (e: React.FormEvent) => {
        e.preventDefault();
        if (!state.movies.includes(state.newMovie)) {
            setState(prev => ({
                ...prev,
                movies: [...prev.movies, state.newMovie]
            }))
        } else {
            alert('Movie with such id already added')
        }
    }

    const addMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({
            ...prev,
            newMovie: {
                name: e.target.value,
                id: Math.random().toString()
            }
        }))
    }

    const editMovieName = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const index = state.movies.findIndex(item => item.id === id)
        setState(prev => {
                const itemsCopy = {...prev};
                const itemCopy = {...itemsCopy.movies[index]};
                itemCopy.name = e.target.value;
                itemsCopy.movies[index] = itemCopy;
                return itemsCopy
            }
        )
    }

    const deleteMovie = (id: string) => {
        setState(prev => ({
            ...prev,
            movies: state.movies.filter((result) => {
                return result.id !== id
            })
        }))
    }

    return (
        <div className='window'>
            <form onSubmit={addMovie}>
                <input type='text' onChange={addMovieName}/>
                <button type='submit'>Add</button>
            </form>

            {state.movies.map((movie) => (
                <div key={movie.id}>
                    <MovieListFunc id={movie.id} name={movie.name}
                               inputOnChange={e => editMovieName(e, movie.id)}/>
                    <button type='button' onClick={() => deleteMovie(movie.id)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default MovieFormFunc