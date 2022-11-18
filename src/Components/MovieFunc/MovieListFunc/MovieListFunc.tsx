import React from 'react';
import {MovieForList} from "../../../types";


const MovieListFunc: React.FC<MovieForList>= React.memo((props) =>{


        return (
            <div className='watch-list'>
                <input type='text' value={props.name} onChange={e => props.inputOnChange(e)}></input>
            </div>
        );
    })


export default MovieListFunc;