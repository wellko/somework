import React from 'react';
import {Movie} from "../../types";



const MovieList = (props:Movie) => {



	return (
		<div className='watch-list'>
			<input type='text' value={props.name} onChange={() => props.inputOnChange(props.id)}></input>
			<span>#{props.index}</span>
		</div>
	);
};

export default MovieList;